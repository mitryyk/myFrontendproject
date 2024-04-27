import { createBrowserRouter } from 'react-router-dom';
import { Mainpage } from '../pages/MainPage';
import { Journal_Cl } from '../pages/Journal_Cl';
import { Journal_Ht } from '../pages/Journal_Ht';
import { ReportPage } from '../pages/ReportPage';
import { WikiPage } from '../pages/WikiPage';
import { UserLoginPage } from 'pages/UserLoginPage';
import { RootComponent } from 'core/root';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    path: '/', // ROUTES.ROOT
    element: <UserLoginPage />,
  },
  {
    path: '/main', // ROUTES.MAIN,
    element: <Mainpage />,
  },
  {
    path: ROUTES.PAGES,
    element: <RootComponent />,
    children: [
      {
        path: ROUTES.JOURNAL_CL,
        element: <Journal_Cl />,
      },
      {
        path: ROUTES.JOURNAL_HT,
        element: <Journal_Ht />,
      },
      {
        path: ROUTES.REPORTPAGE,
        element: <ReportPage />,
      },
      {
        path: ROUTES.WIKIPAGE, // ,
        element: <WikiPage />,
      },
    ],
  },
]);
