import React from "react";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <Link to="/" className={css.navLink}>
        Головна
      </Link>
      <Link to="/contacts" className={css.navLink}>
        Телефонна книга
      </Link>
    </nav>
  );
};

export default Navigation;
