import { NavLink } from 'react-router-dom';

interface NabarProps {
   path: string;
   icon: string;
   label: string;
}

const Navbar: React.FC<NabarProps> = ({ icon, label, path }) => {
   return (
      <NavLink
         to={path}
         className={({ isActive }) =>
            isActive
               ? 'flex w-full items-center gap-[10px] border-l-[10px] border-[#F00751] py-[10px] pl-[20px]'
               : 'flex w-full items-center gap-[10px] border-l-[10px] py-[10px] pl-[20px]'
         }
      >
         <img className="h-[24px] w-[24px]" src={icon} alt="" />
         {label}
      </NavLink>
   );
};

export default Navbar;
