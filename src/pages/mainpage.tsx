import { PageContainer } from '../sharedpagecomponents/pagecontainer';
import { CardLink } from 'sharedpagecomponents/mainpagecardlink';
import { cardlinks } from '../data/allpagescontent';

export const Mainpage = () => {
  return (
    <PageContainer>
      <CardLink pic={cardlinks[0].img} text={cardlinks[0].text} />
      <CardLink pic={cardlinks[1].img} text={cardlinks[1].text} />
      <CardLink pic={cardlinks[2].img} text={cardlinks[2].text} />
      <CardLink pic={cardlinks[3].img} text={cardlinks[3].text} />
    </PageContainer>
  );
};
