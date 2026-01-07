<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class Recaptcha implements ValidationRule
{
    /**
     * Validate the attribute.
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (empty($value)) {
            $fail('reCAPTCHA token is required.');
            return;
        }

        try {
            $secretKey = config('services.recaptcha.secret_key');
            Log::info('reCAPTCHA validation attempt', [
                'token_length' => strlen($value),
                'secret_key_set' => !empty($secretKey),
                'token_preview' => substr($value, 0, 50) . '...',
                'ip' => request()->ip(),
            ]);

            $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
                'secret' => $secretKey,
                'response' => $value,
                'remoteip' => request()->ip(),
            ]);

            if ($response->failed()) {
                Log::error('reCAPTCHA verification failed', [
                    'status' => $response->status(),
                    'body' => $response->body(),
                ]);
                $fail('reCAPTCHA verification failed.');
                return;
            }

            $json = $response->json();

            if (!($json['success'] ?? false)) {
                Log::error('reCAPTCHA validation failed', [
                    'response' => $json,
                    'errors' => $json['error-codes'] ?? [],
                ]);
                $fail('Invalid reCAPTCHA.');
                return;
            }

            // For v3, check score threshold (temporarily disabled for debugging)
            if (isset($json['score'])) {
                Log::info('reCAPTCHA score received', [
                    'score' => $json['score'],
                    'action' => $json['action'] ?? 'unknown',
                    'hostname' => $json['hostname'] ?? 'unknown',
                ]);

                if ((float) $json['score'] < 0.5) {
                    Log::warning('reCAPTCHA score too low', [
                        'score' => $json['score'],
                        'action' => $json['action'] ?? 'unknown',
                    ]);
                    // Temporarily allow low scores for debugging
                    // $fail('reCAPTCHA score too low.');
                    // return;
                }
            }
        } catch (\Throwable $e) {
            Log::error('reCAPTCHA validation exception', [
                'message' => $e->getMessage(),
                'token_length' => strlen($value ?? ''),
            ]);
            $fail('reCAPTCHA validation error.');
        }
    }
}
