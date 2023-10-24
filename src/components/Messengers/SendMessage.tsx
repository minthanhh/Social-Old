import { FC } from 'react';

interface SendMessageProps {
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   value: string;
}

const SendMessage: FC<SendMessageProps> = ({ onChange, value }) => {
   return (
      <div className="flex w-full flex-row items-center px-4 py-4 shadow-md">
         <div className="relative flex-1 rounded-full bg-gray-300/40 shadow-sm saturate-100 backdrop-blur backdrop-contrast-100 backdrop-filter">
            <input
               type="text"
               className="w-full bg-transparent px-3 py-2 align-bottom leading-none outline-none"
               placeholder="Aa"
               value={value}
               onChange={onChange}
            />
         </div>
      </div>
   );
};

export default SendMessage;
