import { MainPageContainer } from '../sharedpagecomponents/pagecontainers/mainpage_container';
import { CardLink } from 'sharedpagecomponents/mainpagecardlink';
import { cardlinks } from '../data/AllPagesContent';

export const Mainpage = () => {
  return (
    <>
      <MainPageContainer>
        {cardlinks.map(el => {
          return <CardLink link={el.link} key={el.id} pic={el.img} text={el.text} />;
        })}
      </MainPageContainer>
    </>
  );
};
