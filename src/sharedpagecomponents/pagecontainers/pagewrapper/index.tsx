import '../../../w3.css';
import { Header } from '../../../sharedpagecomponents/header';
import { ReactNode } from 'react';
import s from './PageWrapper.module.css';

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};
