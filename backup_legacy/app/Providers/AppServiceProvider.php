<?php

namespace App\Providers;

use App\Contract\Auth\UserAuthContract;
use App\Contract\AuthContract;
use App\Contract\BaseContract;
use App\Contract\Master\ArticleContract;
use App\Contract\Master\CategoryContract;
use App\Contract\Master\ClientContract;
use App\Contract\Master\LibraryContract;
use App\Contract\Master\PageContract;
use App\Contract\Master\ShowcaseContract;
use App\Contract\Master\SpecialityContract;
use App\Contract\Master\StakeHolderContract;
use App\Contract\Master\ValueContract;
use App\Contract\Operational\CareerContract;
use App\Contract\Operational\InquiryContract;
use App\Contract\Setting\SettingContract;
use App\Service\Auth\UserAuthService;
use App\Service\AuthService;
use App\Service\BaseService;
use App\Service\Master\ArticleService;
use App\Service\Master\CategoryService;
use App\Service\Master\ClientService;
use App\Service\Master\LibraryService;
use App\Service\Master\PageService;
use App\Service\Master\ShowcaseService;
use App\Service\Master\SpecialityService;
use App\Service\Master\StakeHolderService;
use App\Service\Master\ValueService;
use App\Service\Operational\CareerService;
use App\Service\Operational\InquiryService;
use App\Service\Setting\SettingService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(AuthContract::class, AuthService::class);
        $this->app->bind(BaseContract::class, BaseService::class);

        // Auth
        $this->app->bind(UserAuthContract::class, UserAuthService::class);

        // Master
        $this->app->bind(SettingContract::class, SettingService::class);
        $this->app->bind(ArticleContract::class, ArticleService::class);
        $this->app->bind(SpecialityContract::class, SpecialityService::class);
        $this->app->bind(ValueContract::class, ValueService::class);
        $this->app->bind(CategoryContract::class, CategoryService::class);
        $this->app->bind(ClientContract::class, ClientService::class);
        $this->app->bind(ShowcaseContract::class, ShowcaseService::class);
        $this->app->bind(LibraryContract::class, LibraryService::class);
        $this->app->bind(PageContract::class, PageService::class);
        $this->app->bind(StakeHolderContract::class, StakeHolderService::class);

        // Operational
        $this->app->bind(InquiryContract::class, InquiryService::class);
        $this->app->bind(CareerContract::class, CareerService::class);

        // Setting
        $this->app->bind(SettingContract::class, SettingService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
