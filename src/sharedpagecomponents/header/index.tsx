import '../../w3.css';
import { headercontent } from '../../data/AllPagesContent';
import type { NavbarItems, NavbarDropdowns } from '../../data/AllPagesContent';
import { ReactNode } from 'react';

const NavbarItem = ({ itemlabel }: { itemlabel: string }) => {
  return (
    <a href="#" className="w3-bar-item w3-button w3-mobile">
      {itemlabel}
    </a>
  );
};

const DropDown = ({ dropname, children }: { dropname: string; children: ReactNode }) => {
  return (
    <div className="w3-dropdown-hover w3-mobile">
      <button className="w3-button">{dropname}</button>
      <div className="w3-dropdown-content w3-bar-block w3-card-4">{children}</div>
    </div>
  );
};

export const Header = () => {
  const headerArray: any = [];
  const headercomponentsArr: any = [];

  for (const key in headercontent) {
    headercontent[key].forEach((el: NavbarItems | NavbarDropdowns) => headerArray.push(el));
  }
  headerArray.sort((a: any, b: any) => {
    if (a.posNumber > b.posNumber) {
      return 1;
    }
    if (a.posNumber < b.posNumber) {
      return -1;
    }
    return 0;
  });

  headerArray.map((el: NavbarItems & NavbarDropdowns) => {
    if (!el.isdropdownel) {
      headercomponentsArr.push(<NavbarItem key={el.posNumber} itemlabel={el.navbarItem} />);
    } else {
      const tempArr: any = [];
      el.dropdownItems.forEach((et: { pos: number; text: string }) => {
        tempArr.push(<NavbarItem key={et.pos} itemlabel={et.text} />);
      });
      headercomponentsArr.push(
        <DropDown key={el.posNumber} dropname={el.dropdownName}>
          {tempArr}
        </DropDown>,
      );
    }
  });

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-card w3-light-grey">{headercomponentsArr}</div>
      </div>
    </>
  );
};
