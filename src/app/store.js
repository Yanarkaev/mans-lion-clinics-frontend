import { configureStore } from "@reduxjs/toolkit";
import departmentsSlice from "../features/departments/departmentsSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    departments: departmentsSlice,
  },
});
