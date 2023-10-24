import { LayoutMain, LayoutMessage } from '@/layouts';
import { Home } from '@/pages';
import LayoutAuth from '@/layouts/Auth/LayoutAuth';
import { useRoutes } from 'react-router-dom';

export const AppRouter = () => {
   const elements = useRoutes([
      {
         path: '/',
         element: <LayoutAuth />,
      },
      {
         path: '/app',
         element: <LayoutMain />,
         children: [
            {
               path: '',
               element: <Home />,
            },
         ],
      },
      {
         path: '/message',
         element: <LayoutMessage />,
         // children: [
         //    {
         //       path: '/:id',
         //       element: <Message />,
         //    },
         // ],
      },
   ]);
   return elements;
};
