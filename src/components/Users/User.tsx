import { FC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type UserDirections = 'row' | 'col';

const userDirections: Record<UserDirections, string> = {
   col: 'flex-col',
   row: 'flex-row',
};

export interface BaseUserProps extends HTMLAttributes<HTMLDivElement> {
   children: React.ReactNode;
   to?: string;
   direction?: UserDirections;
}

const BaseUser: FC<BaseUserProps> = ({
   children,
   className,
   direction,
   to,
   ...props
}) => {
   const baseClassName = 'flex rounded-md px-2 py-2 gap-2';
   const allClassName = twMerge(
      baseClassName,
      userDirections[direction || 'col'],
      className
   );

   if (to) {
      return (
         <Link to={to || ''} className={allClassName}>
            {children}
         </Link>
      );
   }

   return (
      <div className={allClassName} {...props}>
         {children}
      </div>
   );
};

export default BaseUser;
