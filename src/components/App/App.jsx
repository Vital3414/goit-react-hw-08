import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/auth/options.js";
import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "../../pages/ContactsPage/ContactsPage.jsx";
import Layout from "../Layout.jsx";
import NotFound from "../../pages/NotFoundPage/NotFoundPage.jsx";
import RegistrationForm from "../../pages/RegistrationPage/RegistrationPage.jsx";
import HomeForm from "../../pages/HomePage/HomePage.jsx";
import LoginForm from "../../pages/LoginPage/LoginPage.jsx";
import { refreshUser } from "../../redux/auth/operations.js";
import { selectIsRefreshing } from "../../redux/contacts/slice.js";
import AppBar from "./AppBar.jsx";
import RestrictedRoute from "./RestrictedRoute.jsx";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeForm />} />
          <Route
            path="contacts"
            element={
              <AppBar>
                <ContactsPage />
              </AppBar>
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute>
                <RegistrationForm />
              </RestrictedRoute>
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute>
                <LoginForm />
              </RestrictedRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
