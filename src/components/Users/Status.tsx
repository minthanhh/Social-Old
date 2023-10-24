import { FC } from 'react';

interface StatusProps {
   userPresence: string;
}

const Status: FC<StatusProps> = ({ userPresence }) => {
   return (
      <span>{userPresence === 'active' ? 'Hoạt động' : 'Ngưng hoạt động'}</span>
   );
};

export default Status;
