import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "./operations";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (body, thunkAPI) => {
    try {
      const { data } = await goitApi.get("/contacts", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await goitApi.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await goitApi.post(`/contacts`, body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    localStorage.removeItem("token");
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
