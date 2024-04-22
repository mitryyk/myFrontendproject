import s from './userButton.module.scss';
import { CiUser } from 'react-icons/ci';

export const UserButton = () => {
  return (
    <button className={s.button}>
      <CiUser color="#ffffff" className={s.icon} /> Профиль
    </button>
  );
};
