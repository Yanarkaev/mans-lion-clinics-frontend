import { configureStore } from "@reduxjs/toolkit";
import departmentsSlice from "../features/departments/departmentsSlice";

export const store = configureStore({
  reducer: {
    departments: departmentsSlice,
  },
});
