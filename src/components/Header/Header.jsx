import React from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.container}>
      <div className={css.first}>
        <ul className={css.navList}>
          <li>
            <Link to="/" className={css.navLink}>
              Головна
            </Link>
          </li>
          <li>
            <Link to="/contacts" className={css.navLink}>
              Телефонна книга
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.second}>
        <ul className={css.navList}>
          <li>
            <Link to="/register" className={css.navLink}>
              Зареєструватись
            </Link>
          </li>
          <li>
            <Link to="/login" className={css.navLink}>
              Увійти
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
