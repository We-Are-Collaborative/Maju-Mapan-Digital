<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pages = [
            [
                'name' => 'Home',
                'slug' => 'home',
                'content' => [
                    // Hero Section
                    'hero_logo_src' => '/assets/turning.svg',
                    'hero_logo_alt' => 'Turning - Digital Credentials Platform',
                    'hero_cta_text' => 'Download Credential',
                    'hero_cta_link' => 'https://www.youtube.com/watch?v=QKCLRiOPRjw',

                    // Say Hello Section
                    'banner_title' => 'Say Hello to Your Next Growth Partner',
                    'banner_subtitle' => '(a.k.a Maju Mapan - yes, we love wordplay)',
                    'banner_description' => "We're a 360 digital agency that understands, every brand and campaign craves impact! That's why we craft tailor-made strategies to deliver results that truly hit the mark.",

                    // What We Stand For Section
                    'values_title' => 'What We Stand for',
                    'values_subtitle' => 'Three beliefs guide everything we do — and yes, they make a difference.',
                    'values_cta_text' => 'Learn More',

                    // Our Specialties Section
                    'specialties_title' => 'Our Specialties',
                    'specialties_subtitle' => 'We build your brand across every platform — creating bold, cohesive campaigns that hit home with your audience.',
                    'specialties_cta_text' => 'Learn More',

                    // Our Works Section
                    'works_title' => 'Our Works',
                    'works_subtitle' => 'Smart strategies. Bold executions. Measurable wins.',
                    'works_subtitle_highlight' => "That's how we deliver impact",
                    'works_plus_more_text' => 'Plus more names',
                    'works_plus_more_subtext' => "we're proud of...",

                    // CTA Section (replacing contact)
                    'cta_title' => 'Ready to Transform Your Brand?',
                    'cta_description' => "Let's craft a strategy that delivers real impact. Get in touch with us today.",
                    'contact_submit_text' => "Let's Talk",
                ],
                'seo_config' => [
                    'title' => '5758 Creative Lab - Digital Marketing & Creative Solutions',
                    'description' => '5758 Creative Lab provides comprehensive digital marketing, web development, and creative solutions for businesses in Indonesia.',
                    'keywords' => 'digital marketing, web development, creative solutions, branding, mobile apps',
                    'author' => '5758 Creative Lab',
                    'locale' => 'id_ID',
                    'language' => 'id',
                    'type' => 'website',
                    'site_name' => '5758 Creative Lab',
                    'canonical' => 'https://5758creative.com',
                    'image' => '/images/og-home.jpg',
                    'image_width' => 1200,
                    'image_height' => 630,
                    'image_alt' => '5758 Creative Lab - Digital Marketing & Creative Solutions',
                    'twitter_card' => 'summary_large_image',
                    'twitter_site' => '@5758creativelab',
                    'twitter_creator' => '@5758creativelab',
                    'twitter_image' => '/images/twitter-home.jpg',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Article List',
                'slug' => 'article-list',
                'content' => [
                    'page_title' => 'Explore Our Latest Insights',
                    'page_description' => 'Stay informed with our expertly crafted articles covering business strategies, industry trends, and actionable advice. Whether you\'re looking to optimize operations, boost marketing efforts, or embrace new technologies, our articles provide the knowledge you need to stay ahead.',

                    // Article List Content
                    'all_tab_text' => 'All',
                    'read_time_text' => 'min read',
                    'default_read_time' => '5',

                    // Article Card Content
                    'like_count_placeholder' => '215',
                    'comment_count_placeholder' => '35',
                ],
                'seo_config' => [
                    'title' => 'Articles - 5758 Creative Lab',
                    'description' => 'Explore our latest articles about digital marketing, web development, and creative insights.',
                    'keywords' => 'articles, blog, digital marketing insights, web development tips',
                    'author' => '5758 Creative Lab',
                    'locale' => 'id_ID',
                    'language' => 'id',
                    'type' => 'website',
                    'site_name' => '5758 Creative Lab',
                    'canonical' => 'https://5758creative.com/articles',
                    'twitter_card' => 'summary_large_image',
                    'twitter_site' => '@5758creativelab',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Career List',
                'slug' => 'career-list',
                'content' => [
                    'page_subtitle' => 'Career',
                    'page_title' => 'Join Our Team',
                    'page_description' => 'Bring your creative ideas to life',

                    // Career Page Content
                    'hero_background_image' => '/assets/bg-tools.webp',
                    'hero_background_alt' => 'Background',
                    'category_default_description' => 'Explore exciting opportunities in this field and join our growing team.',
                    'salary_currency_symbol' => '$',
                    'salary_separator' => ' - ',
                ],
                'seo_config' => [
                    'title' => 'Careers - Join 5758 Creative Lab',
                    'description' => 'Discover exciting career opportunities at 5758 Creative Lab. Join our team of creative professionals.',
                    'keywords' => 'careers, jobs, digital marketing jobs, web development careers',
                    'author' => '5758 Creative Lab',
                    'locale' => 'id_ID',
                    'language' => 'id',
                    'type' => 'website',
                    'site_name' => '5758 Creative Lab',
                    'canonical' => 'https://5758creative.com/careers',
                    'twitter_card' => 'summary_large_image',
                    'twitter_site' => '@5758creativelab',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Client List',
                'slug' => 'client-list',
                'content' => [
                    'clients_title' => 'Our Clients',
                    'clients_subtitle' => 'Trusted partners who have chosen us to bring their visions to life',
                    'clients_description' => 'We\'re proud to work with amazing companies and individuals who trust us with their digital presence.',
                    'featured_client_label' => 'Featured Client',
                    'no_clients_title' => 'No clients found',
                    'no_clients_description' => 'We\'re working on building our client portfolio.',
                ],
                'seo_config' => [
                    'title' => 'Our Clients - 5758 Creative Lab',
                    'description' => 'Meet our trusted clients and partners who have chosen us to bring their visions to life through digital solutions.',
                    'keywords' => 'clients, portfolio, partners, digital solutions, success stories',
                    'author' => '5758 Creative Lab',
                    'locale' => 'id_ID',
                    'language' => 'id',
                    'type' => 'website',
                    'site_name' => '5758 Creative Lab',
                    'canonical' => 'https://5758creative.com/client',
                    'twitter_card' => 'summary_large_image',
                    'twitter_site' => '@5758creativelab',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Client Detail',
                'slug' => 'client-detail',
                'content' => [
                    'client_profile_label' => 'Client Profile',
                    'projects_showcases_title' => 'Projects & Showcases',
                    'project_singular' => 'project',
                    'projects_plural' => 'projects',
                    'no_projects_title' => 'No projects yet',
                    'no_projects_description' => 'We\'re working on exciting projects with this client. Stay tuned!',
                    'back_to_clients_text' => 'Back to All Clients',
                    'featured_client_label' => '⭐ Featured Client',
                    'live_status_text' => 'Live',
                    'in_progress_status_text' => 'In Progress',
                ],
                'seo_config' => [
                    'title' => 'Client Profile - 5758 Creative Lab',
                    'description' => 'Learn more about our client and the projects we\'ve delivered together.',
                    'keywords' => 'client profile, projects, collaboration, digital solutions',
                    'author' => '5758 Creative Lab',
                    'locale' => 'id_ID',
                    'language' => 'id',
                    'type' => 'website',
                    'site_name' => '5758 Creative Lab',
                    'twitter_card' => 'summary_large_image',
                    'twitter_site' => '@5758creativelab',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Showcase Detail',
                'slug' => 'showcase-detail',
                'content' => [
                    'live_project_text' => 'Live Project',
                    'in_development_text' => 'In Development',
                    'similar_projects_title' => 'Similar Projects',
                    'live_status_text' => 'Live',
                    'in_progress_status_text' => 'In Progress',
                    'your_browser_text' => 'Your browser does not support iframes.',
                    'click_here_text' => 'Click here to view the content directly',
                    'fallback_link_text' => 'View Content',
                ],
                'seo_config' => [
                    'title' => 'Project Showcase - 5758 Creative Lab',
                    'description' => 'Explore our project showcase and see how we bring digital solutions to life.',
                    'keywords' => 'showcase, project, portfolio, digital solutions, case study',
                    'author' => '5758 Creative Lab',
                    'locale' => 'id_ID',
                    'language' => 'id',
                    'type' => 'website',
                    'site_name' => '5758 Creative Lab',
                    'twitter_card' => 'summary_large_image',
                    'twitter_site' => '@5758creativelab',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Contact',
                'slug' => 'contact',
                'content' => [
                    'contact_title' => "Slide Into Our Inbox — We Don't Bite!",
                    'contact_subtitle' => "Ready to transform your brand? Let's start the conversation.",
                    'contact_name_label' => 'Full Name',
                    'contact_email_label' => 'Work Email',
                    'contact_phone_label' => 'Phone Number',
                    'contact_submit_text' => "Let's Talk",
                ],
                'seo_config' => [
                    'title' => 'Contact Us - 5758 Creative Lab',
                    'description' => 'Get in touch with 5758 Creative Lab. Let\'s discuss your digital marketing and creative needs to transform your brand.',
                    'keywords' => 'contact, get in touch, digital marketing consultation, creative solutions',
                    'author' => '5758 Creative Lab',
                    'locale' => 'id_ID',
                    'language' => 'id',
                    'type' => 'website',
                    'site_name' => '5758 Creative Lab',
                    'canonical' => 'https://5758creative.com/contact',
                    'twitter_card' => 'summary_large_image',
                    'twitter_site' => '@5758creativelab',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Thank You',
                'slug' => 'thank-you',
                'content' => [
                    'thank_you_title' => 'Thank You!',
                    'thank_you_subtitle' => 'Your message has been received',
                    'thank_you_description' => 'We appreciate you reaching out to us. Our team will review your inquiry and get back to you within 24 hours. In the meantime, feel free to explore our work or connect with us on social media.',
                    'personalized_subtitle' => 'Thank you for reaching us {name}',
                    'personalized_description' => 'Our representative will contact you shortly',
                    'next_steps_title' => 'What happens next?',
                    'step_1' => 'Our team will review your inquiry and project requirements',
                    'step_2' => 'We\'ll reach out within 24 hours to schedule a consultation',
                    'step_3' => 'Together, we\'ll craft a strategy that delivers real impact',
                    'back_to_home_text' => 'Back to Home',
                    'explore_articles_text' => 'Explore Our Articles',
                    'urgent_contact_title' => 'Need urgent assistance?',
                    'urgent_contact_text' => 'For urgent inquiries, you can reach us directly at',
                ],
                'seo_config' => [
                    'title' => 'Thank You - 5758 Creative Lab',
                    'description' => 'Thank you for contacting 5758 Creative Lab. We\'ll get back to you soon!',
                    'keywords' => 'thank you, contact received, digital marketing consultation',
                    'author' => '5758 Creative Lab',
                    'locale' => 'id_ID',
                    'language' => 'id',
                    'type' => 'website',
                    'site_name' => '5758 Creative Lab',
                    'canonical' => 'https://5758creative.com/thank-you',
                    'twitter_card' => 'summary_large_image',
                    'twitter_site' => '@5758creativelab',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'About Us',
                'slug' => 'about-us',
                'content' => [
                    // Hero Section
                    'hero_title' => 'We Create Digital Excellence',
                    'hero_subtitle' => 'A team of passionate strategists, designers, and marketers dedicated to transforming brands through data-driven creativity.',

                    // Our Story Section
                    'story_title' => 'The Story Behind 5758',
                    'story_paragraph_1' => "We're not your typical agency. At 5758 Creative Lab, we believe in the power of strategic creativity combined with data-driven insights. Founded with a vision to transform how brands connect with their audiences, we've grown into a team of passionate digital strategists, designers, and marketers.",
                    'story_paragraph_2' => 'Every project we take on is an opportunity to push boundaries and deliver results that matter. From startups to established enterprises, we craft tailored solutions that resonate with your target audience and drive measurable growth.',
                    'story_paragraph_3' => "Our approach is simple: understand your goals, analyze the landscape, create compelling strategies, and execute with precision. We're here to be your growth partner, not just another vendor.",

                    // Values Section
                    'values_title' => 'What We Stand For',
                    'values_subtitle' => 'Our values are the foundation of everything we do and guide every decision we make.',
                    'values_cta_text' => 'Learn More',

                    // Team Section
                    'team_title' => 'Meet The Dream Team',
                    'team_subtitle' => 'Meet the passionate experts who bring creativity and innovation to every project.',

                    // CTA Section
                    'cta_title' => 'Ready to Elevate Your Brand?',
                    'cta_description' => "Let's transform your vision into reality. Join forces with a team that's passionate about your success.",
                    'cta_button_text' => "Let's Talk",
                ],
                'seo_config' => [
                    'title' => 'About Us - Award-Winning Digital Marketing Agency | 5758 Creative Lab',
                    'description' => 'Discover 5758 Creative Lab: an award-winning digital marketing and creative agency. Meet our expert team, explore our values, and see how we drive measurable results for 50+ clients.',
                    'keywords' => 'about us, award-winning digital agency, team, mission, values, digital marketing, creative solutions, 5758 creative lab',
                    'author' => '5758 Creative Lab',
                    'locale' => 'id_ID',
                    'language' => 'id',
                    'type' => 'website',
                    'site_name' => '5758 Creative Lab',
                    'canonical' => 'https://5758creative.com/about-us',
                    'image' => '/images/og-about.jpg',
                    'image_width' => 1200,
                    'image_height' => 630,
                    'image_alt' => 'About 5758 Creative Lab - Award-Winning Digital Marketing Agency',
                    'twitter_card' => 'summary_large_image',
                    'twitter_site' => '@5758creativelab',
                    'twitter_creator' => '@5758creativelab',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Solution List',
                'slug' => 'solution-list',
                'content' => [
                    // Hero Section
                    'hero_subtitle' => 'Solutions',
                    'hero_title' => 'Tailored Digital Solutions',
                    'hero_description' => 'From strategy to execution, we deliver comprehensive digital solutions that drive measurable results for your business.',

                    // Stats Section
                    'stat_1_value' => '10+',
                    'stat_1_label' => 'Solutions Delivered',
                    'stat_2_value' => '360°',
                    'stat_2_label' => 'Digital Coverage',
                    'stat_3_value' => '100%',
                    'stat_3_label' => 'Custom Strategies',
                    'stat_4_value' => '24/7',
                    'stat_4_label' => 'Support Available',

                    // Solutions Section
                    'solutions_title' => 'Our Solutions',
                    'solutions_subtitle' => 'Comprehensive digital services designed to accelerate your growth',
                    'learn_more_text' => 'Learn More',

                    // CTA Section
                    'cta_title' => 'Ready to Transform Your Digital Presence?',
                    'cta_description' => "Let's discuss how our solutions can help achieve your business goals.",
                    'cta_button_text' => "Let's Talk",
                ],
                'seo_config' => [
                    'title' => 'Our Solutions - Comprehensive Digital Services | 5758 Creative Lab',
                    'description' => 'Explore our comprehensive digital solutions including web development, mobile apps, digital marketing, branding, and creative services tailored to your business needs.',
                    'keywords' => 'digital solutions, web development, mobile apps, digital marketing, branding, creative services, 360 digital agency',
                    'author' => '5758 Creative Lab',
                    'locale' => 'id_ID',
                    'language' => 'id',
                    'type' => 'website',
                    'site_name' => '5758 Creative Lab',
                    'canonical' => 'https://5758creative.com/solutions',
                    'image' => '/images/og-solutions.jpg',
                    'image_width' => 1200,
                    'image_height' => 630,
                    'image_alt' => 'Comprehensive Digital Solutions by 5758 Creative Lab',
                    'twitter_card' => 'summary_large_image',
                    'twitter_site' => '@5758creativelab',
                    'twitter_creator' => '@5758creativelab',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'Privacy Policy',
                'slug' => 'privacy-policy',
                'content' => [
                    // Hero Section
                    'badge_text' => 'Your Privacy Matters',
                    'hero_title' => 'Privacy Policy',
                    'hero_subtitle' => 'We are committed to protecting your privacy and ensuring the security of your personal information in compliance with GDPR and applicable data protection laws.',
                    'last_updated' => 'October 7, 2025',
                    'last_updated_text' => 'Last Updated',
                    'back_button_text' => 'Back to Home',

                    // Privacy Principles
                    'principle_1' => 'GDPR compliant data protection practices',
                    'principle_2' => 'Industry-standard encryption and security',
                    'principle_3' => 'Full transparency in data processing',
                    'principle_4' => 'Your rights are our priority',

                    // Introduction Section
                    'intro_title' => 'How We Protect Your Data',
                    'intro_description' => 'At 5758 Creative Lab, we are committed to protecting your personal data and respecting your privacy rights. This Privacy Policy explains how we collect, use, store, and protect your information in accordance with the General Data Protection Regulation (GDPR), Indonesian Law No. 27 of 2022 on Personal Data Protection, and other applicable privacy laws.',

                    // Policy Sections
                    'section_1_title' => 'Information We Collect',
                    'section_1_content' => 'When you contact us through our website, we collect the following personal information: (a) Contact Information: Full name, work email address, phone number; (b) Professional Information: Company name, job position, and preferred meeting dates; (c) Business Information: Your top marketing objectives and project requirements; (d) Technical Information: IP address, browser type, device information, and cookies for website functionality and analytics; (e) Security Data: Google reCAPTCHA tokens to prevent spam and abuse. We only collect information that is necessary for providing our services and communicating with you effectively.',

                    'section_2_title' => 'Legal Basis and How We Use Your Information',
                    'section_2_content' => 'We process your personal data under the following legal bases: (a) Consent: When you submit our contact form, you provide explicit consent for us to process your information; (b) Legitimate Interests: To respond to your inquiries, provide requested information, and improve our services; (c) Contractual Necessity: To discuss and potentially establish a business relationship. We use your information to: respond to your inquiries and schedule consultations; send you relevant information about our services; analyze website usage to improve user experience; protect against spam, fraud, and security threats; and comply with legal obligations. We will never use your data for purposes beyond those stated without obtaining your explicit consent.',

                    'section_3_title' => 'Information Sharing and Third Parties',
                    'section_3_content' => 'We respect your privacy and do not sell, rent, or trade your personal information. We may share your data only in the following limited circumstances: (a) Service Providers: We use Google reCAPTCHA for form security. Google processes reCAPTCHA data under their Privacy Policy and GDPR-compliant terms; (b) Legal Requirements: We may disclose information if required by law, court order, or governmental authority, or to protect our legal rights; (c) Business Transfers: In the event of a merger or acquisition, your data may be transferred to the new entity, subject to the same privacy protections. All third-party service providers are contractually bound to protect your data and use it only for specified purposes.',

                    'section_4_title' => 'Data Security and Retention',
                    'section_4_content' => 'We implement robust security measures including: SSL/TLS encryption for data transmission; secure server infrastructure with regular security updates; access controls limiting data access to authorized personnel only; regular security audits and vulnerability assessments; and backup procedures to prevent data loss. We retain your personal data only as long as necessary: Active inquiries are retained for 2 years from last contact; completed project data is retained for 7 years for legal and tax purposes; marketing consent data is retained until you withdraw consent; and technical logs and analytics data are retained for 12 months. After these periods, we securely delete or anonymize your information.',

                    'section_5_title' => 'Your Rights Under GDPR and Privacy Laws',
                    'section_5_content' => 'You have the following rights regarding your personal data: (a) Right to Access: Request copies of your personal data we hold; (b) Right to Rectification: Correct inaccurate or incomplete information; (c) Right to Erasure: Request deletion of your data ("right to be forgotten"); (d) Right to Restrict Processing: Limit how we use your data; (e) Right to Data Portability: Receive your data in a structured, machine-readable format; (f) Right to Object: Object to processing based on legitimate interests; (g) Right to Withdraw Consent: Withdraw consent at any time without affecting prior processing; (h) Right to Lodge a Complaint: File a complaint with your local data protection authority. To exercise any of these rights, please contact us at the email provided below. We will respond within 30 days.',

                    'section_6_title' => 'Cookies and Tracking Technologies',
                    'section_6_content' => 'We use cookies and similar technologies to enhance your browsing experience: (a) Essential Cookies: Required for website functionality and security (e.g., reCAPTCHA); (b) Analytics Cookies: Help us understand how visitors use our website to improve user experience; (c) Preference Cookies: Remember your settings and preferences. You can control cookies through your browser settings. Note that disabling essential cookies may affect website functionality. We do not use cookies for third-party advertising or tracking. For more information about the cookies we use, their purposes, and retention periods, please contact us.',

                    'section_7_title' => 'International Data Transfers',
                    'section_7_content' => 'Your data may be transferred to and processed in countries outside your country of residence, including countries that may not have equivalent data protection laws. When we transfer data internationally, we ensure appropriate safeguards are in place, including: Standard Contractual Clauses approved by the European Commission; adequacy decisions recognizing equivalent data protection; and binding corporate rules for intra-organizational transfers. We ensure all international transfers comply with GDPR Chapter V requirements.',

                    'section_8_title' => 'Children\'s Privacy',
                    'section_8_content' => 'Our services are intended for businesses and professionals. We do not knowingly collect personal information from individuals under 18 years of age. If you believe we have inadvertently collected information from a minor, please contact us immediately, and we will take steps to delete such information.',

                    'section_9_title' => 'Changes to This Privacy Policy',
                    'section_9_content' => 'We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by: posting the updated policy on our website with a new "Last Updated" date; sending an email notification if you have subscribed to our communications; and providing prominent notice on our website for significant changes. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.',

                    // Contact Section
                    'contact_title' => 'Data Protection Officer & Contact',
                    'contact_description' => 'If you have questions about this Privacy Policy, wish to exercise your data protection rights, or have concerns about how we handle your information, please email us at hello@5758creativelab.com. We are committed to resolving any privacy concerns promptly and transparently.',
                    'contact_button_text' => 'Email Us',
                    'contact_email_link' => 'mailto:hello@5758creativelab.com',
                ],
                'seo_config' => [
                    'title' => 'Privacy Policy - How We Protect Your Data | 5758 Creative Lab',
                    'description' => 'Learn how 5758 Creative Lab collects, uses, and protects your personal information. Our commitment to your privacy, data security, and transparency in data practices.',
                    'keywords' => 'privacy policy, data protection, personal information, data security, cookies, GDPR, privacy rights, 5758 creative lab',
                    'author' => '5758 Creative Lab',
                    'locale' => 'id_ID',
                    'language' => 'id',
                    'type' => 'website',
                    'site_name' => '5758 Creative Lab',
                    'canonical' => 'https://5758creative.com/privacy-policy',
                    'image' => '/images/og-privacy.jpg',
                    'image_width' => 1200,
                    'image_height' => 630,
                    'image_alt' => 'Privacy Policy - 5758 Creative Lab',
                    'twitter_card' => 'summary_large_image',
                    'twitter_site' => '@5758creativelab',
                    'twitter_creator' => '@5758creativelab',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'FAQ',
                'slug' => 'faq',
                'content' => [
                    // Hero Section
                    'badge_text' => 'Got Questions?',
                    'hero_title' => 'Frequently Asked Questions',
                    'hero_subtitle' => 'Find answers to common questions about our services, process, pricing, and more. Can\'t find what you\'re looking for? Feel free to reach out.',
                    'back_button_text' => 'Back to Home',

                    // Introduction Section
                    'intro_title' => 'Everything You Need to Know',
                    'intro_description' => 'Browse through our most frequently asked questions. We\'ve organized them by category to help you find what you\'re looking for quickly.',

                    // FAQ` Categories
                    'category_1_name' => 'General',
                    'category_2_name' => 'Process & Workflow',
                    'category_3_name' => 'Pricing & Payment',
                    'category_4_name' => 'Technical',

                    // Contact Section
                    'contact_title' => 'Still Have Questions?',
                    'contact_description' => 'Can\'t find the answer you\'re looking for? Our team is here to help. Get in touch with us and we\'ll respond as soon as possible.',
                    'contact_button_text' => 'Contact Us',
                ],
                'seo_config' => [
                    'title' => 'Frequently Asked Questions - 5758 Creative Lab',
                    'description' => 'Find answers to common questions about our services, process, pricing, and more. Get the information you need about working with 5758 Creative Lab.',
                    'keywords' => 'faq, frequently asked questions, services, pricing, process, digital marketing, web development, support',
                    'author' => '5758 Creative Lab',
                    'locale' => 'id_ID',
                    'language' => 'id',
                    'type' => 'website',
                    'site_name' => '5758 Creative Lab',
                    'canonical' => 'https://5758creative.com/faq',
                    'image' => '/images/og-faq.jpg',
                    'image_width' => 1200,
                    'image_height' => 630,
                    'image_alt' => 'Frequently Asked Questions - 5758 Creative Lab',
                    'twitter_card' => 'summary_large_image',
                    'twitter_site' => '@5758creativelab',
                    'twitter_creator' => '@5758creativelab',
                ],
                'is_active' => true,
            ],
            [
                'name' => '404 Error',
                'slug' => '404',
                'content' => [
                    // Error Page Content
                    'error_title' => 'Oops! Page Not Found',
                    'error_subtitle' => 'Looks like this page went on vacation',
                    'error_description' => "The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.",

                    // Action Buttons
                    'home_button_text' => 'Back to Home',
                    'contact_button_text' => 'Contact Us',

                    // Navigation Help
                    'suggestions_text' => 'Or try one of these popular pages:',
                ],
                'seo_config' => [
                    'title' => '404 - Page Not Found | 5758 Creative Lab',
                    'description' => 'The page you\'re looking for doesn\'t exist. Return to our homepage or explore our digital marketing and creative services.',
                    'keywords' => '404, page not found, error, digital marketing, creative solutions',
                    'author' => '5758 Creative Lab',
                    'locale' => 'id_ID',
                    'language' => 'id',
                    'type' => 'website',
                    'site_name' => '5758 Creative Lab',
                    'canonical' => 'https://5758creative.com/error-404',
                    'image' => '/images/og-404.jpg',
                    'image_width' => 1200,
                    'image_height' => 630,
                    'image_alt' => '404 - Page Not Found | 5758 Creative Lab',
                    'twitter_card' => 'summary_large_image',
                    'twitter_site' => '@5758creativelab',
                    'twitter_creator' => '@5758creativelab',
                    'robots' => 'noindex, nofollow', // Important: Don't index 404 pages
                ],
                'is_active' => true,
            ],
        ];

        foreach ($pages as $page) {
            Page::create($page);
        }
    }
}
