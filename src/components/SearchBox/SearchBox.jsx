import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <p className={css.label}>Пошук за імʼям</p>
      <input
        className={css.input}
        type="text"
        placeholder="Поле пошуку"
        onChange={handleChange}
      />
    </div>
  );
}
