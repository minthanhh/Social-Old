import { useCallback, useRef } from 'react';

const usePostModal = () => {
   const ref = useRef<HTMLDialogElement>(null);

   console.log(ref);

   const handleShowModal = useCallback(() => {
      ref.current?.showModal();
   }, [ref]);

   return { ref, show: handleShowModal };
};

export default usePostModal;
