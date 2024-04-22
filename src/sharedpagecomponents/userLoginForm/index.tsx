import { useNavigate, useParams } from 'react-router-dom';

import s from './userLoginForm.module.scss';
import { ROUTES } from 'router/routes';

export const UserLoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className={s.centerForm}>
      <div className={s.formBody}>
        <label>
          <b>Пользователь</b>
        </label>
        <input className={s.input} type="text" placeholder="Имя пользователя" name="uname" required />

        <label>
          <b>Пароль</b>
        </label>
        <input className={s.input} type="password" placeholder="Пароль" name="psw" required />

        <button
          className={s.button}
          onClick={e => {
            e.preventDefault;
            navigate(ROUTES.MAIN);
          }}
          type="submit"
        >
          ВОЙТИ
        </button>
      </div>
    </div>
  );
};
