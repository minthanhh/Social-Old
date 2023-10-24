import { Sidebar, Header } from '@/components';
import PostModal from '@/components/Modal/PostModal';
import { Outlet } from 'react-router-dom';

const LayoutMain = () => {
   return (
      <>
         <div className="h-full w-full">
            <Header />

            <main className="flex h-[calc(100%_-_70px)] flex-row items-start bg-[#f1f3f4]">
               <Sidebar />
               <Outlet />
            </main>
         </div>

         <PostModal />
      </>
   );
};

export default LayoutMain;
