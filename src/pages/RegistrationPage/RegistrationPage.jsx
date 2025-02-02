import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./RegistrationPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/contacts/operations";

const RegistrationForm = () => {
  const initialValues = {
    password: "",
    email: "",
    name: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => navigate("/"))
      .catch((error) => {
        console.error("Registration error:", error);
        actions.setFieldError("email", "Ця пошта вже використовується.");
      });
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Ім'я обов'язкове")
      .min(2, "Ім'я має містити принаймні 2 символи"),
    email: Yup.string()
      .email("Невірний формат електронної пошти")
      .required("Електронна пошта обов'язкова"),
    password: Yup.string()
      .required("Пароль обов'язковий")
      .min(6, "Пароль має містити принаймні 6 символів"),
  });

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <h2>Реєстрація</h2>
            <label>
              <span>Імʼя:</span>
              <Field name="name" />
              {errors.name && touched.name && (
                <div className={css.error}>{errors.name}</div>
              )}
            </label>
            <label>
              <span>Пошта:</span>
              <Field name="email" />
              {errors.email && touched.email && (
                <div className={css.error}>{errors.email}</div>
              )}
            </label>
            <label>
              <span>Пароль:</span>
              <Field name="password" type="password" />
              {errors.password && touched.password && (
                <div className={css.error}>{errors.password}</div>
              )}
            </label>
            <button type="submit">Зареєструватись</button>
            <p>
              Ти вже зареєстрований? <Link to="/login">Тоді тицяй сюди</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
