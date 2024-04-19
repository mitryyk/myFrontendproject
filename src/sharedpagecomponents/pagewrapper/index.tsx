import '../../w3.css';
import { HeaderResponsive } from '../headerResponsive';
import { ReactNode } from 'react';
import s from './PageWrapper.module.scss';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderResponsive />
      <div className={s.container}>{children}</div>
    </>
  );
};
