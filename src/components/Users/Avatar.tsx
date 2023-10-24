import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface AvatarProps {
   src: string;
   alt: string;
   justPosted?: true;
   userPresence?: boolean;
   className?: string;
}

const Avatar: FC<AvatarProps> = ({ alt, src, userPresence, className }) => {
   return (
      <div className={twMerge('relative h-12 w-12 flex-shrink-0', className)}>
         <div className="relative flex h-full w-full flex-shrink pt-[100%]">
            <img
               src={src}
               alt={alt}
               loading="lazy"
               className="absolute inset-0 flex h-full max-h-full w-full max-w-full flex-shrink rounded-full object-cover"
            />
         </div>
         {userPresence ? (
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
         ) : null}
      </div>
   );
};

export default Avatar;
