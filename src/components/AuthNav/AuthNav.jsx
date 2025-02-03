import React from "react";
import { Link } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <Link to="/register" className={css.navLink}>
        Зареєструватись
      </Link>
      <Link to="/login" className={css.navLink}>
        Увійти
      </Link>
    </div>
  );
};

export default AuthNav;
