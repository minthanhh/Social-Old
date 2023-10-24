import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

type ButtonSizes = 'sm' | 'md' | 'lg';
const buttonSizes: Record<ButtonSizes, string> = {
   sm: 'text-xs w-1/4 px-2 py-1 rounded-full',
   md: 'w-1/4 px-4 py-2',
   lg: 'w-full text-base',
};

interface ButtonProps {
   disabled?: boolean;
   label: string;
   outline?: boolean;
   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
   icon?: IconType;
   size?: 'sm' | 'md' | 'lg';
   className?: string;
}

const Button: React.FC<ButtonProps> = ({
   label,
   onClick,
   icon: Icon,
   size = 'sm',
   className,
}) => {
   const sizeClasses = buttonSizes[size];
   return (
      <button
         onClick={onClick}
         className={twMerge(
            'gradient hover:gradient-2 flex w-full min-w-min items-center justify-center gap-1 whitespace-nowrap rounded-md border-none px-10 py-2 text-white transition-all duration-200 ease-linear',
            sizeClasses,
            className
         )}
      >
         {Icon && <Icon size={12} />}
         {label}
      </button>
   );
};

export default Button;
