import { createBrowserRouter } from 'react-router-dom';
import { Mainpage } from '../pages/MainPage';
import { Journal_Cl } from '../pages/Journal_Cl';
import { Journal_Ht } from '../pages/Journal_Ht';
import { ReportPage } from '../pages/ReportPage';
import { WikiPage } from '../pages/WikiPage';
import { RootComponent } from 'core/root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainpage />,
  },
  {
    path: 'pages',
    element: <RootComponent />,
    children: [
      {
        path: 'journal_cl',
        element: <Journal_Cl />,
      },
      {
        path: 'journal_ht',
        element: <Journal_Ht />,
      },
      {
        path: 'reportpage',
        element: <ReportPage />,
      },
      {
        path: 'wikipage',
        element: <WikiPage />,
      },
    ],
  },
]);
