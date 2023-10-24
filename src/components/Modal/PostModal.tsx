import { IconGallery, IconGif, IconSmile } from '@/assets/icons/posts';
import Button from '../Button/Button';
import HeadingModal from './HeadingModal';
import { FC, useState } from 'react';
import { IconType } from 'react-icons';
import { CgChevronLeft } from 'react-icons/cg';
import { MdOutlineNotInterested } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import User from '../Users/Compose';
import { FaEarthAsia } from 'react-icons/fa6';
import { FaUserFriends, FaUser } from 'react-icons/fa';
import { BiSolidLockAlt } from 'react-icons/bi';
import AudienceList from './AudienceList';
import { AudienceLabel } from '@/helpers/common';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { onClose } from '@/store/slices/modalSlice';
import { RootState } from '@/store';

enum POSTSTEPS {
   AUDIENCE = 0,
}

const PostModal = () => {
   const dispatch = useAppDispatch();
   const [addBackground, setAddBackground] = useState(false);
   const [chooseBackground, setChooseBackground] = useState('');
   const [postSteps, setPostSteps] = useState<POSTSTEPS | null>(null);
   const [translate, setStanslate] = useState(false);
   const { isOpen } = useAppSelector((state: RootState) => state.modal);

   // Select features
   const [audience, setAudience] = useState('public');

   const createPostActions = [
      {
         icon: IconGallery,
      },
      {
         icon: IconSmile,
      },
      {
         icon: IconGif,
      },
   ];

   const gradientColors = [
      {
         gradientStyle:
            'bg-gradient-to-tr from-pink-600 via-pink-400 to-pink-200',
      },
      {
         gradientStyle:
            'bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900',
      },
      {
         gradientStyle:
            'bg-gradient-to-bl from-green-300 via-yellow-300 to-pink-300',
      },
      {
         gradientStyle:
            'bg-gradient-to-bl from-fuchsia-300 via-green-400 to-rose-700',
      },
      {
         gradientStyle:
            'bg-gradient-to-tr from-emerald-500 via-cyan-700 to-blue-500',
      },
      {
         gradientStyle:
            'bg-gradient-to-bl from-lime-400 via-green-600 to-teal-700',
      },
   ];

   const audienceList = [
      {
         icon: FaEarthAsia,
         title: 'Công khai',
         description: 'Bất kì ai ở trên hoặc ngoài Lime8',
         value: 'public',
      },
      {
         icon: FaUserFriends,
         title: 'Bạn bè',
         description: 'Bạn bè của bạn trên Lime8',
         value: 'friends',
      },
      {
         icon: FaUserFriends,
         title: 'Bạn bè ngoại trừ',
         description: 'Không hiển thị với một số bạn bè',
         value: 'friendsExcept',
      },
      {
         icon: FaUser,
         title: 'Bạn bè cụ thể',
         description: 'Chỉ hiển thị với một số bạn bè',
         value: 'specificFriends',
      },
      {
         icon: BiSolidLockAlt,
         title: 'Chỉ mình tôi',
         value: 'onlyMe',
      },
   ];

   let body: JSX.Element = <></>;

   if (postSteps === POSTSTEPS.AUDIENCE) {
      body = (
         <>
            <HeadingModal onClick={() => {}} title="Đối tượng của bài viết" />

            <div className="mb-3">
               <h3 className="mb-2 text-sm font-semibold leading-5 text-black">
                  Ai có thể xem bài viết của bạn?
               </h3>
               <p className="text-xs font-normal leading-5 text-[#999999]">
                  Bài viết của bạn sẽ hiển thị ở Bảng feed, trang cá nhân và kết
                  quả tìm kiếm.
               </p>
               <p className="text-xs font-normal leading-5 text-[#999999]">
                  Tuy đối tượng mặc định là Công khai, nhưng bạn có thể thay đổi
                  đối tượng của riêng bài viết này.
               </p>
            </div>

            <AudienceList
               audienceList={audienceList}
               onSelectAudience={(e) => setAudience(e.target.value)}
               defaultValue={audience}
            />

            <div className="mt-5 flex items-center justify-end gap-3">
               <Button
                  label="Hủy"
                  size="md"
                  onClick={() => {
                     setStanslate(false);
                     setAudience('public');
                  }}
               />
               <Button
                  label="Xong"
                  size="md"
                  onClick={() => setStanslate(false)}
               />
            </div>
         </>
      );
   }

   return isOpen ? (
      <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-x-hidden overflow-y-hidden bg-black/60">
         <div className="relative flex w-[500px] flex-row flex-nowrap overflow-x-hidden overflow-y-hidden rounded-md">
            <div
               className={twMerge(
                  'relative flex h-max min-w-[500px] flex-col gap-3 bg-white p-4 transition-all duration-150  ease-linear',
                  translate ? '-translate-x-full' : 'translate-x-0'
               )}
            >
               <HeadingModal
                  onClick={() => dispatch(onClose())}
                  title="Tạo bài viết"
               />
               <User direction="row" className="p-0">
                  <User.Avatar
                     src="https://images.unsplash.com/photo-1686710614705-bf7fc2338cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                     alt="Avatar"
                     userPresence={true}
                  />
                  <User.Info>
                     <User.Name name="Hồ Minh Thành" className="mb-1" />
                     <User.Viewer
                        label={AudienceLabel(audience)}
                        icon={FaEarthAsia}
                        onClick={() => {
                           setStanslate(true);
                           setPostSteps(POSTSTEPS.AUDIENCE);
                        }}
                     />
                  </User.Info>
               </User>

               <div className="flex w-full flex-col gap-3">
                  <div
                     className={twMerge(
                        'relative flex h-auto w-full flex-col gap-5 rounded-md',
                        chooseBackground
                           ? `${chooseBackground} h-[300px] p-3`
                           : ''
                     )}
                  >
                     <textarea
                        className="h-auto w-full flex-grow appearance-none bg-transparent outline-none"
                        placeholder="Bạn đang nghĩ gì thế ?"
                     ></textarea>

                     <div className="mt-auto flex items-center">
                        <span
                           onClick={() => setAddBackground((v) => !v)}
                           className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-gradient-to-tr from-pink-600 via-pink-400 to-pink-200 font-extrabold text-white"
                        >
                           {addBackground ? (
                              <CgChevronLeft
                                 fontSize={25}
                                 className="h-full w-full leading-5"
                              />
                           ) : (
                              'A'
                           )}
                        </span>

                        {addBackground ? (
                           <div className="flex items-center gap-1 px-1">
                              <span
                                 onClick={() => setChooseBackground('')}
                                 className={twMerge(
                                    'flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm bg-slate-200'
                                 )}
                              >
                                 <MdOutlineNotInterested fontSize={15} />
                              </span>
                              {gradientColors.map((gradientColor, idx) => (
                                 <span
                                    onClick={() =>
                                       setChooseBackground(
                                          gradientColor.gradientStyle
                                       )
                                    }
                                    key={idx}
                                    className={twMerge(
                                       'h-7 w-7 cursor-pointer rounded-sm',
                                       gradientColor.gradientStyle
                                    )}
                                 ></span>
                              ))}
                           </div>
                        ) : null}
                     </div>
                  </div>

                  <div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-3">
                     <p>Thêm vào bài viết</p>

                     <div className="flex items-center justify-center gap-2">
                        {createPostActions.map((icon, idx) => (
                           <div key={idx}>
                              <PostActionIcon icon={icon.icon} />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               <Button label="Đăng" size="lg" />
            </div>

            <div
               className={twMerge(
                  'relative h-max min-w-[500px] bg-white p-4 transition-all duration-150 ease-linear',
                  translate ? '-translate-x-full' : 'translate-x-0'
               )}
            >
               {body}
            </div>
         </div>
      </div>
   ) : null;
};

export default PostModal;

const PostActionIcon: FC<{ icon: IconType }> = ({ icon: Icon }) => {
   return <Icon fontSize={25} className="linearGradientIcon cursor-pointer" />;
};
