import React from "react";
import css from "./HomePage.module.css";

const HomeForm = () => {
  return (
    <div className={css.homeContainer}>
      <h2 className={css.title}>Ласкаво просимо до нашого додатку!</h2>
      <p className={css.description}>
        Це ваша домашня сторінка, де ви можете зберігати свої контакти.
      </p>
    </div>
  );
};

export default HomeForm;
