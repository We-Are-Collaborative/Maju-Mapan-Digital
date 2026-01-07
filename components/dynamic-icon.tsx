import { Suspense, lazy } from 'react';
import { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
    iconName: string;
    size?: number | string;
}

export const DynamicIcon = ({ iconName, size = 24, ...props }: DynamicIconProps) => {
    const IconComponent = lazy<React.FC<LucideProps>>(() =>
        import('lucide-react').then((module) => {
            const Icon = (module as any)[iconName];
            if (!Icon) {
                // Fallback to HelpCircle if icon not found
                // Note: HelpCircle might be deprecated in newer lucide versions, use CircleHelp or similar if needed.
                // For now assuming HelpCircle exists or just returning a fallback div logic if cleaner.
                // But better to return a Component.
                return { default: (module as any).HelpCircle || (module as any).CircleHelp };
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
