import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations.js";
import { selectIsRefreshing } from "../../redux/contacts/slice.js";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout.jsx";
import NotFound from "../../pages/NotFoundPage/NotFoundPage.jsx";
import RegistrationForm from "../../pages/RegistrationPage/RegistrationPage.jsx";
import HomeForm from "../../pages/HomePage/HomePage.jsx";
import LoginForm from "../../pages/LoginPage/LoginPage.jsx";
import ContactsPage from "../../pages/ContactsPage/ContactsPage.jsx";
import RestrictedRoute from "./RestrictedRoute.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Loader from "../Loader/Loader.jsx";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeForm />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
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
  );
}
