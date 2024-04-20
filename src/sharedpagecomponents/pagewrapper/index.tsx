import '../../w3.css';
import { HeaderResponsive } from '../headerResponsive';
import { ReactNode } from 'react';
import s from './PageWrapper.module.scss';
import { UserButton } from 'sharedpagecomponents/userButton';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserButton />
      <HeaderResponsive />
      <div className={s.container}>{children}</div>
    </>
  );
};
