import { SearchIcon } from '@/assets/icons/navigation';
import Navigation from '@/components/Messages/Navigations/Navigation';
import ListUsers from '@/components/Messages/Navigations/ListUsers';
import { ICardUser } from '@/types';
import Message from '@/components/Messengers/Message';

const LayoutMessage = () => {
   // const [dispayMore, setDisplayMore] = useState(false);
   // const [userMessage, setUserMessage] = useState('');

   // const messageDemo = [
   //    {
   //       message: 'Chào cậu',
   //       formSelf: 'sended',
   //    },
   //    {
   //       message: 'Cậu là ai vậy?',
   //       formSelf: 'recieved',
   //    },
   //    {
   //       message: 'Tại sao cậu lại có được facebook của tôi vậy hả?',
   //       formSelf: 'recieved',
   //    },
   //    {
   //       message:
   //          'Chào cậu tôi xin tự giới thiệu tôi là tên là lê gia bảo AKA bảo gian xảo',
   //       formSelf: 'sended',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'recieved',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'sended',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'recieved',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'sended',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'recieved',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'sended',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'recieved',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'sended',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'recieved',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'sended',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'recieved',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'sended',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'recieved',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'sended',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'recieved',
   //    },
   //    {
   //       message: 'Chào anh',
   //       formSelf: 'sended',
   //    },
   // ];

   const listUsers: ICardUser[] = [
      {
         avatar: 'https://avatars.githubusercontent.com/u/94770601?v=4',
         message: 'Thạch thảo chin đẹp đáng euuuuu ',
         name: 'Hồ Minh Thành',
         userPresence: true,
      },
      {
         avatar: 'https://avatars.githubusercontent.com/u/94770601?v=4',
         message: 'Thạch thảo chin đẹp đáng euuuuu ',
         name: 'Lê Gia Bảo',
      },
      {
         avatar: 'https://avatars.githubusercontent.com/u/94770601?v=4',
         message: 'Thạch thảo chin đẹp đáng euuuuu ',
         name: 'Nguyễn Đình Trung',
      },
      {
         avatar: 'https://avatars.githubusercontent.com/u/94770601?v=4',
         message: 'Thạch thảo chin đẹp đáng euuuuu ',
         name: 'Ngô Xuân Lợi',
      },
      {
         avatar: 'https://avatars.githubusercontent.com/u/94770601?v=4',
         message: 'Thạch thảo chin đẹp đáng euuuuu ',
         name: 'Chung Nhựt Vi',
      },
      {
         avatar: 'https://avatars.githubusercontent.com/u/94770601?v=4',
         message: 'Thạch thảo chin đẹp đáng euuuuu ',
         name: 'Hồ Minh Thành',
      },
      {
         avatar: 'https://avatars.githubusercontent.com/u/94770601?v=4',
         message: 'Thạch thảo chin đẹp đáng euuuuu ',
         name: 'Hồ Minh Thành',
      },
      {
         avatar: 'https://avatars.githubusercontent.com/u/94770601?v=4',
         message: 'Thạch thảo chin đẹp đáng euuuuu ',
         name: 'Hồ Minh Thành',
      },
      {
         avatar: 'https://avatars.githubusercontent.com/u/94770601?v=4',
         message: 'Thạch thảo chin đẹp đáng euuuuu ',
         name: 'Hồ Minh Thành',
      },
      {
         avatar: 'https://avatars.githubusercontent.com/u/94770601?v=4',
         message: 'Thạch thảo chin đẹp đáng euuuuu ',
         name: 'Hồ Minh Thành',
      },
      {
         avatar: 'https://avatars.githubusercontent.com/u/94770601?v=4',
         message: 'Thạch thảo chin đẹp đáng euuuuu ',
         name: 'Hồ Minh Thành',
      },
      {
         avatar: 'https://avatars.githubusercontent.com/u/94770601?v=4',
         message: 'Thạch thảo chin đẹp đáng euuuuu ',
         name: 'Hồ Minh Thành',
      },
   ];

   // const handleToggleActionMore = useCallback(() => {
   //    setDisplayMore((v) => !v);
   // }, []);

   // const currentUser = {
   //    avatar: 'https://avatars.githubusercontent.com/u/94770601?v=4',
   //    name: 'Hồ Minh Thành',
   //    userPresence: true,
   // };

   return (
      <div className="relative flex h-full w-full flex-grow flex-row flex-nowrap justify-start">
         {/* Navigation */}
         <div className="flex h-full min-h-0 max-w-full flex-row flex-nowrap">
            <Navigation />
            <div className="relative hidden w-[320px] min-w-0 max-w-full flex-shrink-0 flex-col shadow-lg md:flex">
               <div className="relative h-full w-full overflow-x-hidden overflow-y-hidden bg-white">
                  <div className="relative flex min-h-full w-full flex-col">
                     <div className="mt-6 flex items-center justify-between px-3 ">
                        <h1 className="font-lemonada text-lg font-bold leading-5">
                           Chat
                        </h1>
                     </div>

                     <div className="mt-4 px-3">
                        <div className="flex w-full items-center rounded-full bg-gray-300/40 shadow-sm saturate-100 backdrop-blur backdrop-contrast-100 backdrop-filter">
                           <label
                              htmlFor="searchFriends"
                              className="flex h-full w-8 items-center justify-center hover:cursor-pointer"
                           >
                              <SearchIcon size={20} />
                           </label>
                           <input
                              id="searchFriends"
                              type="text"
                              placeholder="Enter for search..."
                              className="flex-1 bg-transparent py-2 align-bottom leading-none outline-none"
                           />
                        </div>
                     </div>

                     <ListUsers listUsers={listUsers} />

                     <div>TEst</div>
                  </div>
               </div>
            </div>
         </div>

         <Message />

         {/* <div className="relative flex min-w-0 max-w-full flex-shrink flex-grow flex-col">
            <div className="relative flex w-full min-w-0 flex-shrink flex-grow flex-row">
               <div className="flex min-w-0 max-w-full flex-shrink flex-grow flex-col overflow-x-hidden overflow-y-hidden">
                  <HeaderMessage
                     avatar="https://avatars.githubusercontent.com/u/94770601?v=4"
                     name="Hồ Minh Thành"
                     onToggleActionMore={handleToggleActionMore}
                  />
                  <BodyMessage messageDemo={messageDemo} />
               </div>

               {dispayMore ? (
                  <div className="relative flex min-w-[250px] max-w-[300px] flex-shrink basis-1/4 flex-col shadow-md">
                     <div className="relative flex min-h-0 max-w-full flex-shrink flex-grow flex-col">
                        test
                     </div>
                  </div>
               ) : null}
            </div>
         </div> */}
      </div>
   );
};

export default LayoutMessage;
