import { FC, useState } from 'react';

import HeadMessage from './HeadMessage';
import BodyMessage from './BodyMessage';
import SendMessage from './SendMessage';
import MoreMessage from './MoreMessage';

const Message: FC = () => {
   const [showMore, setShowMore] = useState<boolean>(false);
   const [message, setMessage] = useState('');

   const handleToggleShowMore = () => {
      setShowMore((v) => !v);
   };

   const currentUser = {
      avatar: 'https://avatars.githubusercontent.com/u/94770601?v=4',
      name: 'Hồ Minh Thành',
      userPresence: true,
   };

   const messages = [
      {
         message: 'Tui chào bạn, bạn chào tui đi?',
         formSelf: 'sended',
      },
      {
         message: 'Chào bạn!',
         formSelf: 'recieved',
      },
      {
         message: 'Tui chào bạn, bạn chào tui đi?',
         formSelf: 'sended',
      },
      {
         message: 'Chào bạn!',
         formSelf: 'recieved',
      },
      {
         message: 'Tui chào bạn, bạn chào tui đi?',
         formSelf: 'sended',
      },
      {
         message: 'Chào bạn!',
         formSelf: 'recieved',
      },
      {
         message: 'Tui chào bạn, bạn chào tui đi?',
         formSelf: 'sended',
      },
      {
         message: 'Chào bạn!',
         formSelf: 'recieved',
      },
      {
         message: 'Tui chào bạn, bạn chào tui đi?',
         formSelf: 'sended',
      },
      {
         message: 'Chào bạn!',
         formSelf: 'recieved',
      },
      {
         message: 'Tui chào bạn, bạn chào tui đi?',
         formSelf: 'sended',
      },
      {
         message: 'Chào bạn!',
         formSelf: 'recieved',
      },
      {
         message: 'Tui chào bạn, bạn chào tui đi?',
         formSelf: 'sended',
      },
      {
         message: 'Chào bạn!',
         formSelf: 'recieved',
      },
   ];

   return (
      <div className="relative flex min-w-0 max-w-full flex-shrink flex-grow flex-col">
         <div className="relative flex w-full min-w-0 flex-shrink flex-grow flex-row">
            <div className="flex min-w-0 max-w-full flex-shrink flex-grow flex-col overflow-x-hidden overflow-y-hidden">
               <HeadMessage
                  avatar={currentUser.avatar}
                  name={currentUser.name}
                  userPresence={currentUser.userPresence}
                  onToggleShowMore={handleToggleShowMore}
               />
               <BodyMessage messages={messages} />
               <SendMessage
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
               />
            </div>
            {showMore ? <MoreMessage /> : null}
         </div>
      </div>
   );
};

export default Message;
