import { ReactNode } from 'react';
import s from './pagecontainer.module.css';
import '../../../w3.css';

export const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className={s.gridOnecol}>{children}</div>
    </div>
  );
  {
    /* <div className={s.center}>{children}</div> */
  }
};
/* { children }: { children: ReactNode } */
