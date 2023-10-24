import { FC } from 'react';
import { ICardUser } from '@/types';
import CardUsers from './CardUser';

interface ListUsersProps {
   listUsers: ICardUser[];
}

const ListUsers: FC<ListUsersProps> = ({ listUsers }) => {
   return (
      <div className="mt-6 flex flex-grow basis-0 flex-col overflow-x-hidden overflow-y-hidden">
         <div className="relative flex min-h-0 min-w-0 flex-shrink flex-grow basis-auto flex-col overflow-x-hidden overflow-y-hidden">
            <div className="flex flex-shrink flex-grow flex-col overflow-x-hidden">
               <div className="relative flex flex-grow flex-col overflow-x-hidden overflow-y-hidden">
                  <div
                     className={
                        'relative flex w-full flex-shrink flex-grow flex-col overflow-x-hidden overflow-y-scroll'
                     }
                  >
                     <div className="flex flex-col px-2">
                        {listUsers.map((user, idx) => (
                           <CardUsers
                              key={user.name + idx}
                              avatar={user.avatar}
                              message={user.message}
                              name={user.name}
                              userPresence={user.userPresence}
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ListUsers;
