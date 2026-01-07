import { LucideIcon } from 'lucide-react';

interface IconProps extends React.ComponentProps<'svg'> {
    iconNode: LucideIcon;
}

export const Icon = ({ iconNode: IconNode, ...props }: IconProps) => {
    return <IconNode {...props} />;
};
