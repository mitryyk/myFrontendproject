import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerMenu from '../../data/icons/burgerMenu.svg';
import { headerContent } from '../../data/AllPagesContent';
import s from './headerResp.module.scss';

export const HeaderResponsive = () => {
  //states
  const [menuOpen, setMenuOpen] = useState(false);
  const openDrop = () => {
    setMenuOpen(!menuOpen);
  };

  const [menuMobileOpen, setmenuMobileOpen] = useState(false);
  const openMenuMobile = () => {
    setmenuMobileOpen(!menuMobileOpen);
  };

  const closeNav = () => {
    if (menuOpen || menuMobileOpen) {
      setMenuOpen(false);
      setmenuMobileOpen(false);
    }
  };

  //end of states
  const headercomponentsArr: any = [];
  const subItemArr: any = [];

  headerContent.forEach(el => {
    if (!el.isdropdown) {
      headercomponentsArr.push(
        <li key={el.posNumber} onClick={closeNav}>
          <NavLink to={el.link} className={({ isActive }) => [isActive ? s.active : ''].join(' ')}>
            {el.title}
          </NavLink>
        </li>,
      );
    } else {
      {
        el.subitem.forEach((x, xx) => {
          subItemArr.push(
            <li key={el.subitem[xx].posNumber} onClick={closeNav}>
              <NavLink to={el.subitem[xx].link} className={({ isActive }) => [isActive ? s.active : ''].join(' ')}>
                {el.subitem[xx].title}
              </NavLink>
            </li>,
          );
        });
      }
      headercomponentsArr.push(
        <li key={el.posNumber}>
          <a href="#" onClick={openDrop}>
            {el.title}
          </a>
          <ul className={menuOpen ? s.dropContentOpen : s.dropContent}>{subItemArr}</ul>
        </li>,
      );
    }
  });

  return (
    <nav>
      <div className={s.navMobile} onClick={openMenuMobile}>
        <BurgerMenu color="white" style={{ width: 'inherit', height: 'inherit' }} />
      </div>
      <ul className={menuMobileOpen ? s.navList : s.navlistClose}>{headercomponentsArr}</ul>
    </nav>
  );
};
