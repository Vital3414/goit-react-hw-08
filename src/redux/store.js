import { configureStore } from "@reduxjs/toolkit";
import contactReduser from "./contacts/slice";
import filtersReduser from "./contacts/slice";

export const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filters: filtersReduser,
  },
});
