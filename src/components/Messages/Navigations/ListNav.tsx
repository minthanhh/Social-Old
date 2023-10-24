import { ChatIcon, CompassIcon } from '@/assets/icons/navigation';
import { NavLink } from 'react-router-dom';

const ListNav = () => {
   return (
      <nav className="mt-6 flex flex-shrink-0 flex-col items-center justify-center">
         <ul className="flex flex-col gap-1 px-3">
            <li className="relative block">
               <NavLink
                  to={'/message'}
                  className={({ isActive }) =>
                     isActive
                        ? 'relative block overflow-hidden rounded-md bg-white/50 bg-opacity-50 bg-clip-padding p-2 text-white  saturate-100 backdrop-blur backdrop-contrast-100 backdrop-filter'
                        : 'relative block overflow-hidden rounded-md p-2'
                  }
               >
                  <ChatIcon size={20} />
               </NavLink>
            </li>
            <li className="relative block">
               <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                     isActive
                        ? 'relative block overflow-hidden rounded-md bg-gray-300 p-2'
                        : 'relative block overflow-hidden rounded-md p-2'
                  }
               >
                  <CompassIcon size={20} />
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default ListNav;
