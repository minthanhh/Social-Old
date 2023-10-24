import { FC } from 'react';

const Chat: FC<{ message: string; formSelf: string }> = ({
   message,
   formSelf,
}) => {
   return (
      <div
         className={`relative flex w-full flex-col justify-center rounded-[18px] ${
            formSelf === 'sended' ? 'items-end' : 'items-start'
         }`}
      >
         <div
            className={`flex w-max max-w-[200px] items-center justify-center rounded-full px-3 py-1 md:max-w-xs ${
               formSelf === 'sended'
                  ? 'bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-red-600 via-red-400 to-red-200'
                  : 'bg-[#999]'
            }`}
         >
            <span className="text-sm font-normal text-white">{message}</span>
         </div>
      </div>
   );
};

export default Chat;
