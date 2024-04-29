import { ReactNode } from 'react';
import s from './MainPageContainer.module.scss';
import { ProfileMenu } from 'sharedpagecomponents/profileMenu';
import '../../../w3.css';

export const MainPageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={s.hiddenDiv}>
        <ProfileMenu user="Дмитрий" role="Админ" />
        {/* <UserButton /> */}
      </div>
      <div className={s.medGrid}>{children}</div>
    </>
  );
};
