import { IconType } from 'react-icons';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import { useState } from 'react';
import { IoIosEyeOff, IoIosEye } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';

interface InputFormProps {
   label: string;
   placeholder: string;
   type?: string;
   disabled?: boolean;
   onChange?: () => void;
   displayToggle?: boolean;
   icon?: IconType;
   className?: string;
   required?: boolean;
   id: string;
   errors: FieldErrors;
   register?: UseFormRegister<FieldValues>;
   medium?: boolean;
   large?: boolean;
   small?: boolean;
}

const InputForm: React.FC<InputFormProps> = ({
   label,
   placeholder,
   // className,
   // disabled,
   displayToggle,
   icon: Icon,
   // onChange,
   type,
   required,
   id,
   medium,
   large,
   small,
   register,
}) => {
   const [toggleEye, setToggleEye] = useState(false);

   const handleToggleEye = () => {
      setToggleEye((value) => !value);
   };

   return (
      <div
         className={twMerge(
            'mb-4 w-[80%]',
            medium ? 'md:w-[60%]' : '',
            large ? 'w-[80%]' : '',
            small ? 'w-[40%]' : ''
         )}
      >
         <label
            className="mb-1 block text-base font-semibold text-gray-600"
            htmlFor={id}
         >
            {label}
         </label>

         <div className="relative flex w-full items-center overflow-hidden rounded-md border border-gray-300/50 shadow-md backdrop-blur-lg transition-all duration-300 ease-out">
            <div className="absolute left-0 top-0 flex h-full w-[40px] items-center justify-center overflow-hidden rounded-s-md bg-gray-300/50">
               {Icon ? <Icon className="text-slate-600/80" size={25} /> : null}
            </div>
            <input
               id={id}
               type={toggleEye ? 'text' : type}
               placeholder={placeholder}
               {...register?.(id, { required })}
               className="flex-1 py-2 pl-[50px] outline-none"
            />
            {displayToggle ? (
               <button
                  onClick={handleToggleEye}
                  className="flex h-full w-[40px] items-center justify-center"
               >
                  {toggleEye ? (
                     <IoIosEye className="text-slate-600/80" size={18} />
                  ) : (
                     <IoIosEyeOff className="text-slate-600/80" size={18} />
                  )}
               </button>
            ) : null}
         </div>
      </div>
   );
};

export default InputForm;
