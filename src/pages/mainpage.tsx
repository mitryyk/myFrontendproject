import { MainPageContainer } from '../sharedpagecomponents/pagecontainers/mainpage_container';
import { CardLink } from 'sharedpagecomponents/mainpagecardlink';
import { cardlinks } from '../data/AllPagesContent';

export const Mainpage = () => {
  return (
    <MainPageContainer>
      {cardlinks.map(el => {
        return <CardLink key={el.id} pic={el.img} text={el.text} />;
      })}
    </MainPageContainer>
  );
};
