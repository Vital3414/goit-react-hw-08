import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/contacts/slice";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.userMenu}>
      <h2 className={css.greeting}>Вітання, {user.name}</h2>
      <button className={css.logoutButton} onClick={() => dispatch(logout())}>
        Вийти з аккаунту
      </button>
    </div>
  );
};

export default UserMenu;
