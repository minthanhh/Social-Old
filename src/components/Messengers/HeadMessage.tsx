import { FC, memo } from 'react';
import User from '../Users/Compose';
import { MoreIcon } from '@/assets/icons/messages';

interface HeadMessageProps {
   avatar: string;
   name: string;
   userPresence: boolean;
   onToggleShowMore: () => void;
}

const HeadMessage: FC<HeadMessageProps> = memo(
   ({ name, avatar, onToggleShowMore, userPresence }) => {
      return (
         <div className="flex w-full flex-row items-center justify-between px-2 py-2">
            <User to="/t/fasf" direction="row">
               <User.Avatar
                  src={avatar}
                  userPresence={userPresence}
                  alt="User Avatar"
               />
               <User.Info className="flex flex-col items-start justify-center">
                  <User.Name name={name} />
                  <User.Status userPresence="active" />
               </User.Info>
            </User>

            <div className="px-2">
               <MoreIcon size={25} onClick={onToggleShowMore} />
            </div>
         </div>
      );
   }
);

export default HeadMessage;
