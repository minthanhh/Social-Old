import { FC, HTMLAttributes } from 'react';

interface InfoProps extends HTMLAttributes<HTMLDivElement> {
   children: React.ReactNode;
}

const Info: FC<InfoProps> = ({ children, ...props }) => {
   return <div {...props}>{children}</div>;
};

export default Info;
