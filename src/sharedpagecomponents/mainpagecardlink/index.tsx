import '../../w3.css';
import s from './MainPageCardlink.module.css';

export const CardLink = ({ text, pic }: { text: string; pic: string }) => {
  return (
    <div>
      <a href="#">
        <div className="w3-card-4 w3-display-container">
          <img src={pic} alt={text} className={'w3-hover-opacity' + ' ' + s.imgSize} />
          <div className="w3-display-bottomleft w3-container w3-padding-small w3-white w3-margin">{text}</div>
        </div>
      </a>
    </div>
  );
};
