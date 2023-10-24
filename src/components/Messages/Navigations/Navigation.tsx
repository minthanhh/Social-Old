import ListNav from './ListNav';

const Navigation = () => {
   return (
      <div className="flex min-w-0 max-w-full flex-shrink-0 flex-col bg-gradient-to-b from-red-500 via-rose-600 to-pink-700">
         <div className="relative flex h-full flex-shrink-0 flex-row justify-between">
            <div className="relative flex min-w-0 max-w-full flex-shrink-0 flex-col">
               <ListNav />
            </div>
         </div>
      </div>
   );
};

export default Navigation;
