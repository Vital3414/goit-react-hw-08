import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/auth/options.js";
import css from "./App.module.css";
import Home from "../../pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "../../pages/ContactsPage.jsx";
import Layout from "../Layout.jsx";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );
}
