import { Field, Form, Formik } from "formik";
import css from "./LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/contacts/operations";

const LoginForm = () => {
  const initialValues = {
    password: "",
    email: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => navigate("/"))
      .catch((error) => {
        console.error("Login error:", error);
        actions.setFieldError("email", "Невірна електронна пошта або пароль.");
      });
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form className={css.form}>
            <h2>Увійти</h2>
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
            <button type="submit">Вхід</button>
            <p>
              Ти не маєш облікового запису?{" "}
              <Link to="/register">Тоді йди і створи його</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
