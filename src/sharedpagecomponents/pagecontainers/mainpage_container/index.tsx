import { ReactNode } from 'react';
import s from './ManePageContainer.module.scss';
import { UserButton } from 'sharedpagecomponents/userButton';
import '../../../w3.css';

export const MainPageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={s.hiddenDiv}>
        <UserButton />
      </div>
      <div className={s.medGrid}>{children}</div>
    </>
  );
};
