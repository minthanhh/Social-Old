import { FC } from 'react';
import Chat from '../Chats/Chat';

interface BodyMessageProps {
   messages: {
      message: string;
      formSelf: string;
   }[];
}

const BodyMessage: FC<BodyMessageProps> = ({ messages }) => {
   return (
      <div className="flex flex-grow flex-col">
         <div className="relative flex max-h-full flex-grow basis-0 flex-col overflow-x-hidden overflow-y-hidden">
            <div className="flex flex-grow flex-col overflow-x-hidden">
               <div className="relative isolate flex min-h-0 min-w-0 flex-shrink flex-grow basis-auto flex-col overflow-y-hidden">
                  <div className="isolate flex flex-shrink flex-grow flex-col overflow-x-hidden">
                     <div className="relative flex flex-grow flex-col overflow-x-hidden overflow-y-hidden">
                        <div className="relative flex w-full flex-shrink flex-grow flex-col overflow-x-hidden overflow-y-scroll">
                           <div className="px-3">
                              {messages.map((message, idx) => (
                                 <Chat
                                    key={idx}
                                    message={message.message}
                                    formSelf={message.formSelf}
                                 />
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BodyMessage;
