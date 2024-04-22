import { CiEdit, CiLogout, CiCircleInfo } from 'react-icons/ci';
import s from './profileMenu.module.scss';

type ProfileProps = {
  user: string;
  role: string;
};

export const ProfileMenu = ({ user, role }: ProfileProps) => {
  return (
    <div className={s.profileMenuBlock}>
      <ul>
        <li>
          {user} - {role}
        </li>
        <li>
          <CiCircleInfo color="#ffffff" />
          Инфо
        </li>
        <li>
          <CiEdit color="#ffffff" />
          Создать профиль
        </li>
        <li>
          <CiLogout color="#ffffff" /> Выйти
        </li>
      </ul>
    </div>
  );
};
