export function calculateSeoScore(metrics: any) {
    let score = 100;
    const errors: string[] = [];
    const warnings: string[] = [];

    // Simple mock logic
    if (!metrics.meta?.title) {
        score -= 20;
        errors.push("Missing Meta Title");
    }
    if (!metrics.meta?.description) {
        score -= 10;
        errors.push("Missing Meta Description");
    }

    return { score, errors, warnings };
}

export function extractMetaMetrics(formData: any) {
    return {
        title: formData.title,
        description: formData.description
    };
}
