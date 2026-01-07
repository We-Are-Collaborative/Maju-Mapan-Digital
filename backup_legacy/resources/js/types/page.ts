import { Entity } from './entity';
import { SeoConfig } from './seo_config';

export type PageContent = {
    // Hero Section
    hero_logo_src?: string;
    hero_logo_alt?: string;
    hero_cta_text?: string;
    hero_cta_link?: string;

    // Say Hello Section
    banner_title?: string;
    banner_subtitle?: string;
    banner_description?: string;

    // What We Stand For Section
    values_title?: string;
    values_subtitle?: string;
    values_cta_text?: string;

    // Our Specialties Section
    specialties_title?: string;
    specialties_subtitle?: string;
    specialties_cta_text?: string;

    // Our Works Section
    works_title?: string;
    works_subtitle?: string;
    works_subtitle_highlight?: string;
    works_plus_more_text?: string;
    works_plus_more_subtext?: string;

    // Contact Section
    contact_title?: string;
    contact_name_label?: string;
    contact_email_label?: string;
    contact_phone_label?: string;
    contact_message_label?: string;
    contact_message_placeholder?: string;
    contact_submit_text?: string;

    // Article page content
    page_title?: string;
    page_description?: string;
    all_tab_text?: string;
    read_time_text?: string;
    default_read_time?: string;
    like_count_placeholder?: string;
    comment_count_placeholder?: string;

    // Career page content
    page_subtitle?: string;
    hero_background_image?: string;
    hero_background_alt?: string;
    category_default_description?: string;
    salary_currency_symbol?: string;
    salary_separator?: string;

    // Client page content
    clients_title?: string;
    clients_subtitle?: string;
    clients_description?: string;
    featured_client_label?: string;
    no_clients_title?: string;
    no_clients_description?: string;
    client_profile_label?: string;
    projects_showcases_title?: string;
    project_singular?: string;
    projects_plural?: string;
    no_projects_title?: string;
    no_projects_description?: string;
    back_to_clients_text?: string;

    // Client detail page content
    live_status_text?: string;
    in_progress_status_text?: string;
    live_project_text?: string;
    in_development_text?: string;
    similar_projects_title?: string;

    // Showcase page content
    your_browser_text?: string;
    click_here_text?: string;
    fallback_link_text?: string;

    // Generic content
    [key: string]: any;
};

export type Page = Entity & {
    name?: string;
    slug?: string;
    content?: PageContent;
    seo_config?: SeoConfig;
    is_active?: boolean;
};
