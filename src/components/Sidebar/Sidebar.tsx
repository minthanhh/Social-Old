import {
   CommunityIcon,
   ExploreIcon,
   FavoritesIcon,
   AvatarImage,
   HomeIcon,
   TvIcon,
} from '@/assets';
import Navbar from '../Navbar/Navbar';

const Sidebar = () => {
   const routes = [
      {
         icon: HomeIcon,
         label: 'Feed',
         path: '/',
      },
      {
         icon: ExploreIcon,
         label: 'Explore',
         path: '/explore',
      },
      {
         icon: TvIcon,
         label: 'Top Tv',
         path: '/top-tv',
      },
      {
         icon: FavoritesIcon,
         label: 'My favorites',
         path: '/my-favorites',
      },
      {
         icon: CommunityIcon,
         label: 'Community',
         path: '/community',
      },
   ];

   return (
      <div className="sticky h-full w-[15%] bg-white">
         <div className="mt-[30px] flex flex-col justify-center gap-[10px] border-b border-[#999999] px-[15px] pb-[10px] text-center">
            <div className="flex flex-col items-center gap-1">
               <div className="gradient w-2/5 rounded-full p-[2px]">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-full">
                     <img
                        className="rounded-full border-2 border-white object-cover"
                        src={
                           'https://plus.unsplash.com/premium_photo-1670999762807-7f570598aba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                        }
                        alt=""
                     />
                  </div>
               </div>
               <h3 className="text-base font-bold">Minh Thành</h3>
               <span className="font-normal">Developer</span>
            </div>
            <div className="flex items-center justify-center gap-2">
               <div className="flex flex-col">
                  <span className="font-bold">623</span>
                  <span className="text-xs font-normal uppercase">POSTS</span>
               </div>
               <div className="flex flex-col">
                  <span className="font-bold">775.2K</span>
                  <span className="text-xs font-normal uppercase">
                     FOLLOWER
                  </span>
               </div>
               <div className="flex flex-col">
                  <span className="font-bold">88</span>
                  <span className="text-xs font-normal uppercase">
                     FOLLOWING
                  </span>
               </div>
            </div>
         </div>

         <div className="mt-[30px] flex flex-col border-b border-[#999999] pb-[30px]">
            {routes.map((route, i) => (
               <Navbar
                  key={route.label + i}
                  label={route.label}
                  path={route.path}
                  icon={route.icon}
               />
            ))}
         </div>
      </div>
   );
};

export default Sidebar;
