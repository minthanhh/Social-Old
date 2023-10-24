import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Author } from '@/lib';
import Chat from '@/components/Chats/Chat';
import InputMessage from './InputMessage';

interface BodyMessageProps {
   messageDemo: {
      message: string;
      formSelf: string;
   }[];
}

const BodyMessage: FC<BodyMessageProps> = ({ messageDemo }) => {
   const [userMessage, setUserMessage] = useState<string>('');

   const handleUserMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserMessage(e.target.value);
   };

   return (
      <div className="flex h-full flex-grow flex-col">
         <div className="flex min-h-0 max-w-full flex-shrink flex-grow flex-col">
            <div className="flex flex-grow flex-col">
               <div className="relative flex max-h-full flex-grow basis-0 flex-col overflow-x-hidden overflow-y-hidden">
                  <div className="flex flex-grow flex-col overflow-x-hidden">
                     <div className="relative isolate flex min-h-0 min-w-0 flex-shrink flex-grow basis-auto flex-col overflow-y-hidden">
                        <div className="isolate flex flex-shrink flex-grow flex-col overflow-x-hidden">
                           <div className="relative flex flex-grow flex-col overflow-x-hidden overflow-y-hidden">
                              <div className="relative flex w-full flex-shrink flex-grow flex-col overflow-x-hidden overflow-y-scroll">
                                 <div className="px-3">
                                    <div className="flex h-auto items-center justify-center">
                                       <Author
                                          col
                                          disabledHover
                                          center="items-center"
                                       >
                                          <Author.Image
                                             src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/344901808_932420951214019_3765905976099623053_n.jpg?stp=cp1_dst-jpg_p100x100&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zyr1MRd0hAsAX9wqeJi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfB0x4xfA0Jh8am2lOFHLixFfziVGGFitRF51Uajs7dDLg&oe=64D4C93D"
                                             alt="Loi ngu"
                                          />
                                          <Author.Name
                                             name="Ngu Xuân Lợi"
                                             className=""
                                          />
                                       </Author>
                                    </div>
                                    {messageDemo.map((message, idx) => (
                                       <div
                                          key={idx}
                                          className={twMerge(
                                             'relative flex w-full flex-col justify-center',
                                             message.formSelf === 'sended'
                                                ? 'items-end'
                                                : 'items-start'
                                          )}
                                       >
                                          <Chat message={message.message} />
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <InputMessage
               userMessage={userMessage}
               onUserMessage={handleUserMessage}
            />
         </div>
      </div>
   );
};

export default BodyMessage;
