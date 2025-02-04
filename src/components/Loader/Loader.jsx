import React from "react";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loadercontainer}>
      <div className={css.loader}></div>
      <p>Завантаження...</p>
    </div>
  );
};

export default Loader;
