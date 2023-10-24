import { FC } from 'react';
import { IoClose } from 'react-icons/io5';

interface HeadingModalProps {
   title: string;
   onClick: () => void;
}

const HeadingModal: FC<HeadingModalProps> = ({ title, onClick }) => {
   return (
      <div className="relative mb-5 flex items-center justify-center text-center">
         <h4 className="borderGradient w-3/4 py-5 text-lg font-bold leading-5">
            {title}
         </h4>

         <button
            onClick={onClick}
            className="absolute right-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-slate-300"
         >
            <IoClose fontSize={18} />
         </button>
      </div>
   );
};

export default HeadingModal;
