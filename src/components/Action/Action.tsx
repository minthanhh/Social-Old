interface ActionProps {
   icon: string;
   notify: boolean;
}

const Action: React.FC<ActionProps> = ({ icon }) => {
   return (
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#dfdfdf] bg-[#F5F5F5]">
         <img className="h-5 w-5" src={icon} alt="" />
      </div>
   );
};

export default Action;
