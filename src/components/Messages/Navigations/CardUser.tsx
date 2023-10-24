import { FC } from 'react';
import { Author } from '@/lib';
import { ICardUser } from '@/types';
import { BellIcon } from '@/assets/icons/messages';
import User from '@/components/Users/Compose';

interface CardUsersProps extends ICardUser {
   onClick?: () => void;
   avatarsWhoViewed?: string;
   statusOfPersonSeen?: boolean;
}

const CardUsers: FC<CardUsersProps> = ({
   avatar,
   message,
   name,
   userPresence,
}) => {
   return (
      <User
         to="/t/2300043243243"
         direction="row"
         className="items-center py-[6px] hover:bg-[#F00751]/10"
      >
         <User.Avatar src={avatar} alt={avatar} userPresence={userPresence} />
         <User.Info>
            <User.Name name={name} />
            <span>{message}</span>
         </User.Info>
         <div className="flex h-full flex-grow flex-col items-center justify-between gap-2">
            <BellIcon size={15} className="text-gray-400/80" />
            <User.Avatar className="h-4 w-4" src={avatar} alt="Avatar" />
         </div>
      </User>
   );
};

export default CardUsers;
