import { Outlet } from 'react-router-dom';
import { PageWrapper } from 'sharedpagecomponents/pagewrapper';

export const RootComponent = () => {
  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  );
};
