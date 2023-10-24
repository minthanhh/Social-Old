import { CallVideoIcon, MoreIcon, PhoneIcon } from '@/assets/icons/messages';
import { Author } from '@/lib';
import { FC, memo } from 'react';

interface HeaderMessageProps {
   avatar: string;
   name: string;
   onToggleActionMore?: () => void;
   userPresence?: boolean;
}

const HeaderMessage: FC<HeaderMessageProps> = memo(
   ({ avatar, name, onToggleActionMore, userPresence }) => {
      return (
         <div className="flex w-full flex-row items-center justify-between px-[6px] py-[6px] shadow-lg">
            <Author row gap={2} to="/t/123123321">
               <Author.Image
                  src={avatar}
                  alt={avatar}
                  userPresence={userPresence}
               />
               <Author.Info>
                  <Author.Name name={name} />
                  <Author.Status message="Hoạt động 12 giờ trước" />
               </Author.Info>
            </Author>

            <div className="flex items-center gap-4">
               <Author to="/fadfadsf">
                  <Author.Action icon={PhoneIcon} action="Test" size={25} />
               </Author>

               <Author to="/fadfadsf">
                  <Author.Action icon={CallVideoIcon} action="Test" size={25} />
               </Author>

               <Author onClick={onToggleActionMore}>
                  <Author.Action icon={MoreIcon} action="Test" size={25} />
               </Author>
            </div>
         </div>
      );
   }
);

export default HeaderMessage;
