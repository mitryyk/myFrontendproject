import '../../w3.css';
import s from './mainpagecardlink.module.css';

export const CardLink = ({ text, pic }: { text: string; pic: string }) => {
  return (
    <div>
      <a href="#">
        <div className="w3-card-4 w3-display-container" style={{ width: '100%' }}>
          <img src={pic} alt={text} style={{ width: '100%', display: 'flex' }} className="w3-hover-opacity" />
          <div className="w3-display-bottomleft w3-container w3-padding-small w3-white w3-margin">{text}</div>
        </div>
      </a>
    </div>
  );
};
