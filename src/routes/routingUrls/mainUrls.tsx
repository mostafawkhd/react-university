import { Outlet, RouteObject } from 'react-router-dom';
import MainMenu from '../../MainMenu';
import Student from '../../student/Student';

export const mainUrls: RouteObject = {
  path: '',
  element: (
      <Outlet/>
  ),
  children: [
    {
      path: '',
      element: <MainMenu/>
    },
    {
      path:'student',
      element:<Student/>
    }
  ]
};
