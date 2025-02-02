import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFound = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>404</h2>
      <p className={css.message}>Сторінку не знайдено</p>
      <p className={css.description}>
        Вибачте, але сторінка, яку ви шукаєте, не існує.
      </p>
      <Link to="/" className={css.link}>
        Повернутися на головну
      </Link>
    </div>
  );
};

export default NotFound;
