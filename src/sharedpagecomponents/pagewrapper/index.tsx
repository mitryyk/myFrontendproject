import '../../w3.css';
import { HeaderResponsive } from '../headerResponsive';
import { ReactNode } from 'react';
import s from './PageWrapper.module.scss';
import { UserButton } from 'sharedpagecomponents/userButton';
import { ProfileMenu } from 'sharedpagecomponents/profileMenu';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserButton />
      <HeaderResponsive />
      <ProfileMenu user="Дмитрий Кучаев" role="Администратор" />
      <div className={s.container}>{children}</div>
    </>
  );
};
