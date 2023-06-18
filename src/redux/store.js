import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
    theme: themeReducer,
  },
});