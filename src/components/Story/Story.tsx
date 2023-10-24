interface StoryProps {
   avatar: string;
   nickName: string;
}

const Story: React.FC<StoryProps> = ({ avatar, nickName }) => {
   return (
      <div className="relative flex flex-shrink flex-grow-0 basis-1 flex-col">
         <div className="gradient rounded-full p-[2px]">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-full">
               <img
                  className="rounded-full border-2 border-white object-cover"
                  src={avatar}
                  alt=""
               />
            </div>
         </div>

         <span className="text-sm text-[#888888]">{nickName}</span>
      </div>
   );
};

export default Story;
