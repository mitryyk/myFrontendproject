import { CiEdit, CiLogout, CiCircleInfo, CiUser } from 'react-icons/ci';
import { useState, useEffect, useRef } from 'react';
import s from './profileMenu.module.scss';

type ProfileProps = {
  user: string;
  role: string;
};

export const ProfileMenu = ({ user, role }: ProfileProps) => {
  const [ProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const openMenu = () => {
    setProfileMenuOpen(!ProfileMenuOpen);
  };

  const refEl = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (!refEl.current.contains(e.target)) {
        setProfileMenuOpen(false);
      }
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <button className={s.button} onClick={openMenu} ref={refEl}>
        <CiUser color="#ffffff" className={s.icon} /> Профиль
      </button>
      <div className={ProfileMenuOpen ? s.profileMenuBlock : s.profileMenuNone}>
        <ul>
          <li>
            {user} - {role}
          </li>
          <li>
            <CiCircleInfo color="#ffffff" className={s.icon} /> Инфо
          </li>
          <li>
            <CiEdit color="#ffffff" className={s.icon} /> Создать профиль
          </li>
          <li>
            <CiLogout color="#ffffff" className={s.icon} /> Выйти
          </li>
        </ul>
      </div>
    </>
  );
};
