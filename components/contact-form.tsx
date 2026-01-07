"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);

        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        toast.success("Message sent successfully! We'll get back to you soon.");
        setIsSubmitting(false);
        (event.target as HTMLFormElement).reset();
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-200">
                        Name
                    </label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500 focus:border-brand-500 focus:ring-brand-500"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-200">
                        Email
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500 focus:border-brand-500 focus:ring-brand-500"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-200">
                    Subject
                </label>
                <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    required
                    className="border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500 focus:border-brand-500 focus:ring-brand-500"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-200">
                    Message
                </label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    required
                    className="min-h-[150px] border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500 focus:border-brand-500 focus:ring-brand-500"
                />
            </div>

            <Button
                type="submit"
                className="w-full bg-brand-500 text-black hover:bg-brand-600 sm:w-auto"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}
