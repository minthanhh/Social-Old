import { FC } from 'react';

export interface NameProps {
   name: string;
   className?: string;
}

const Name: FC<NameProps> = ({ name, className }) => {
   return (
      <h3 className={`text-base font-semibold leading-5 ${className}`}>
         {name}
      </h3>
   );
};

export default Name;
