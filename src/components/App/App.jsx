import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import { fetchContacts } from "../../redux/auth/options.js";
import css from "./App.module.css";
import Home from "../../pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "../../pages/ContactsPage.jsx";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Телефонна книга контактів</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}
