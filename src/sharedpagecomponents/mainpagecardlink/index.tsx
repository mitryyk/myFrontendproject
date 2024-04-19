import '../../w3.css';
import s from './MainPageCardlink.module.css';
import { Link } from 'react-router-dom';

export const CardLink = ({ text, pic, link }: { text: string; pic: string; link: string }) => {
  return (
    <div>
      <Link to={link}>
        <div className="w3-card-4 w3-display-container">
          <img src={pic} alt={text} className={'w3-hover-opacity' + ' ' + s.imgSize} />
          <div className="w3-display-bottomleft w3-container w3-padding-small w3-white w3-margin">{text}</div>
        </div>
      </Link>
    </div>
  );
};
