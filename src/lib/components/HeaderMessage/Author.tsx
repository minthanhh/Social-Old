import { FC, memo, type NamedExoticComponent } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface AuthorProps {
   children: React.ReactNode;
   row?: boolean;
   col?: boolean;
   gap?: number | string;
   to?: string;
   className?: string;
   onClick?: () => void;
   disabledHover?: boolean;
   center?: 'justify-center' | 'items-center';
}

interface AuthorCompose {
   Name: typeof AuthorName;
   Image: typeof AuthorImage;
   Info: typeof AuthorInfo;
   Status: typeof AuthorStatus;
   Action: typeof AuthorAction;
   Message: typeof AuthorMessage;
}

const BaseAuthor: FC<AuthorProps> = ({
   children,
   row,
   col,
   gap,
   to,
   className,
   onClick,
   disabledHover,
   center,
}) => {
   return (
      <Link to={to || ''} onClick={onClick} className="relative block">
         <div
            className={twMerge(
               'block rounded-md p-[6px]',
               row ? 'flex flex-row items-center' : '',
               col ? 'flex flex-col' : '',
               typeof gap === 'number' ? `gap-${gap}` : `gap-[${gap}]`,
               disabledHover ? '' : 'hover:bg-gray-200/60',
               center,
               className
            )}
         >
            {children}
         </div>
      </Link>
   );
};

const AuthorInfo: FC<{ children: React.ReactNode }> = ({ children }) => {
   return (
      <div className="relative flex flex-shrink flex-col items-start">
         {children}
      </div>
   );
};

const AuthorName: FC<{ name: string; className?: string }> = ({
   name,
   className,
}) => {
   return <h1 className={className}>{name}</h1>;
};

const AuthorStatus: FC<{ message: string; status?: string | number }> = ({
   message,
}) => {
   return <span>{message}</span>;
};

const AuthorMessage: FC<{ message: string }> = ({ message }) => {
   return (
      <div className="relative line-clamp-1 min-w-0 max-w-full overflow-x-visible overflow-y-visible break-words">
         <span className="block w-[200px] max-w-full overflow-x-hidden overflow-y-hidden text-ellipsis whitespace-nowrap break-words text-xs">
            {message}
         </span>
      </div>
   );
};

interface AuthorImageProps {
   src: string;
   alt: string;
   className?: string;
   defaultAvt?: string;
   userPresence?: boolean;
}

const AuthorImage: FC<AuthorImageProps> = ({
   alt,
   src,
   className,
   defaultAvt = '',
   userPresence,
}) => {
   return (
      <div className={twMerge('relative h-12 w-12 flex-shrink-0', className)}>
         <div className="relative flex h-full w-full flex-shrink pt-[100%]">
            <img
               className="absolute inset-0 flex h-full max-h-full w-full max-w-full flex-shrink rounded-full object-cover"
               src={defaultAvt || src}
               alt={alt}
            />

            {userPresence ? (
               <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
            ) : null}
         </div>
      </div>
   );
};

interface AuthorActionProps {
   icon: IconType;
   action: string;
   size?: number;
}

const AuthorAction: FC<AuthorActionProps> = ({ icon: Icon, size }) => {
   return (
      <div>
         <Icon size={size} className="text-gray-500/70" />
      </div>
   );
};

const Author = memo(BaseAuthor) as NamedExoticComponent<AuthorProps> &
   AuthorCompose;

Author.Name = AuthorName;
Author.Image = AuthorImage;
Author.Info = AuthorInfo;
Author.Status = AuthorStatus;
Author.Action = AuthorAction;
Author.Message = AuthorMessage;

export default Author;
