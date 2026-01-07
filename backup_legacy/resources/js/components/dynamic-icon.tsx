import { Suspense, lazy } from 'react';

export const DynamicIcon = ({ iconName, size = 24, ...props }) => {
    const IconComponent = lazy(() =>
        import('lucide-react').then((module) => {
            const Icon = module[iconName];
            if (!Icon) {
                // Fallback to HelpCircle if icon not found
                return { default: module.HelpCircle };
            }
            return { default: Icon };
        }),
    );

    return (
        <Suspense fallback={<div style={{ width: size, height: size }} />}>
            <IconComponent size={size} {...props} />
        </Suspense>
    );
};
