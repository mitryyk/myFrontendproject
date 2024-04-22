import s from './userLoginForm.module.scss';

export const UserLoginForm = () => {
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

        <button className={s.button} type="submit">
          ВОЙТИ
        </button>
      </div>
    </div>
  );
};
