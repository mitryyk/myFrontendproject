import { CiEdit, CiLogout, CiCircleInfo } from 'react-icons/ci';
import { useState } from 'react';
import s from './profileMenu.module.scss';

type ProfileProps = {
  user: string;
  role: string;
};

export const ProfileMenu = ({ user, role }: ProfileProps) => {
  const [ProfileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <div className={s.profileMenuBlock}>
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
  );
};
