import { FC, memo } from 'react';
import { IconType } from 'react-icons';

interface AudienceProps {
   icon: IconType;
   title: string;
   description?: string;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   value: string;
   defaultValue: string;
}

const Audience: FC<AudienceProps> = memo(
   ({ value, title, onChange, icon: Icon, description, defaultValue }) => {
      return (
         <div className="p-1">
            <label className="flex cursor-pointer select-none items-center gap-3">
               <div className="flex items-center justify-center rounded-full border border-slate-300 p-3">
                  <Icon />
               </div>

               <div className="flex flex-grow flex-col">
                  <h5 className="text-sm font-semibold">{title}</h5>
                  <p className="text-xs font-normal leading-5 text-[#999999]">
                     {description}
                  </p>
               </div>

               <input
                  type="radio"
                  value={value}
                  name="audience"
                  className="h-4 w-4"
                  onChange={onChange}
                  checked={defaultValue === value}
               />
            </label>
         </div>
      );
   }
);

interface AudienceListProps {
   audienceList: Omit<AudienceProps, 'onChange' | 'defaultValue'>[];
   onSelectAudience: (e: React.ChangeEvent<HTMLInputElement>) => void;
   defaultValue: string;
}

const AudienceList: FC<AudienceListProps> = ({
   audienceList,
   onSelectAudience,
   defaultValue,
}) => {
   return (
      <div className="flex flex-col gap-3">
         {audienceList.map(({ description, icon, title, value }, idx) => (
            <Audience
               key={idx}
               icon={icon}
               value={value}
               title={title}
               description={description}
               onChange={onSelectAudience}
               defaultValue={defaultValue}
            />
         ))}
      </div>
   );
};

export default AudienceList;
