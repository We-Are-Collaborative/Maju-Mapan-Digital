import { Entity } from './entity';
import { SeoConfig } from './seo_config';

export type PageContent = {
    // Hero Section
    heroLogoSrc?: string;
    heroLogoAlt?: string;
    heroCtaText?: string;
    heroCtaLink?: string;

    // Say Hello Section
    bannerTitle?: string;
    bannerSubtitle?: string;
    bannerDescription?: string;

    // What We Stand For Section
    valuesTitle?: string;
    valuesSubtitle?: string;
    valuesCtaText?: string;

    // Our Specialties Section
    specialtiesTitle?: string;
    specialtiesSubtitle?: string;
    specialtiesCtaText?: string;

    // Our Works Section
    worksTitle?: string;
    worksSubtitle?: string;
    worksSubtitleHighlight?: string;
    worksPlusMoreText?: string;
    worksPlusMoreSubtext?: string;

    // Contact Section
    contactTitle?: string;
    contactNameLabel?: string;
    contactEmailLabel?: string;
    contactPhoneLabel?: string;
    contactMessageLabel?: string;
    contactMessagePlaceholder?: string;
    contactSubmitText?: string;

    // Article page content
    pageTitle?: string;
    pageDescription?: string;
    allTabText?: string;
    readTimeText?: string;
    defaultReadTime?: string;
    likeCountPlaceholder?: string;
    commentCountPlaceholder?: string;

    // Career page content
    pageSubtitle?: string;
    heroBackgroundImage?: string;
    heroBackgroundAlt?: string;
    categoryDefaultDescription?: string;
    salaryCurrencySymbol?: string;
    salarySeparator?: string;

    // Client page content
    clientsTitle?: string;
    clientsSubtitle?: string;
    clientsDescription?: string;
    featuredClientLabel?: string;
    noClientsTitle?: string;
    noClientsDescription?: string;
    clientProfileLabel?: string;
    projectsShowcasesTitle?: string;
    projectSingular?: string;
    projectsPlural?: string;
    noProjectsTitle?: string;
    noProjectsDescription?: string;
    backToClientsText?: string;

    // Client detail page content
    liveStatusText?: string;
    inProgressStatusText?: string;
    liveProjectText?: string;
    inDevelopmentText?: string;
    similarProjectsTitle?: string;

    // Showcase page content
    yourBrowserText?: string;
    clickHereText?: string;
    fallbackLinkText?: string;

    // Generic content
    [key: string]: any;
};

export type Page = Entity & {
    name?: string;
    slug?: string;
    content?: PageContent;
    seoConfig?: SeoConfig;
    isActive?: boolean;
};
