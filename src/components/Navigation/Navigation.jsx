import React from "react";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/contacts/slice";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <Link to="/" className={css.navLink}>
        Головна
      </Link>
      {isLoggedIn && (
        <Link to="/contacts" className={css.navLink}>
          Телефонна книга
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
