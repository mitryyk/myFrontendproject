import { ReactNode } from 'react';
import s from './pagecontainer.module.css';
import '../../w3.css';

export const PageContainer = ({ children }: { children: ReactNode }) => {
  return <div className={s.gridParent}>{children}</div>;
  {
    /* <div className={s.center}>{children}</div> */
  }
};
/* { children }: { children: ReactNode } */
