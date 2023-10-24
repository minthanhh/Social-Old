import { LikeIcon, SendIcon } from '@/assets/icons/messages';
import { FC } from 'react';

interface InputMessageProps {
   userMessage: string;
   onUserMessage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputMessage: FC<InputMessageProps> = ({
   userMessage,
   onUserMessage,
}) => {
   return (
      <div className="flex w-full flex-row items-center px-3 py-6 shadow-md">
         <div className="relative flex-1 rounded-full bg-gray-300/40 shadow-sm saturate-100 backdrop-blur backdrop-contrast-100 backdrop-filter">
            <input
               type="text"
               className="w-full bg-transparent px-3 py-2 align-bottom leading-none outline-none"
               placeholder="Aa"
               value={userMessage}
               onChange={onUserMessage}
            />

            <button className="absolute right-0 top-2/4 flex h-10 w-10 -translate-y-2/4 items-center justify-center rounded-full bg-gradient-to-b from-red-500 via-rose-600 to-pink-700 p-1">
               {userMessage === '' ? (
                  <LikeIcon size={25} className="text-white" />
               ) : (
                  <SendIcon size={30} className="text-white" />
               )}
            </button>
         </div>
      </div>
   );
};

export default InputMessage;
