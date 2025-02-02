import React from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/contacts/slice";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header className={css.container}>
      <nav className={css.nav}>
        <div className={css.leftNav}>
          <Link to="/" className={css.navLink}>
            Головна
          </Link>
          <Link to="/contacts" className={css.navLink}>
            Телефонна книга
          </Link>
        </div>
        <div className={css.rightNav}>
          {isLoggedIn && <h2 className={css.greeting}>Вітання, {user.name}</h2>}
          {isLoggedIn ? (
            <button
              className={css.logoutButton}
              onClick={() => dispatch(logout())}
            >
              Вийти з аккаунту
            </button>
          ) : (
            <>
              <Link to="/register" className={css.navLink}>
                Зареєструватись
              </Link>
              <Link to="/login" className={css.navLink}>
                Увійти
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
