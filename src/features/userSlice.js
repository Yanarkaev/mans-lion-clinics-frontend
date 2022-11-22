import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  loading: false,
  fullName: "",
  error: "",
  role: "",
  signIn: false,
  signUp: false,
  users: [],
  doctorById: "",
};

export const signUpUser = createAsyncThunk(
  "user/post",
  async (
    {
      fullName,
      login,
      password,
      birthDay,
      department,
      code,
      img,
      jobTitle,
      schedule,
    },
    thunkAPI
  ) => {
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("login", login);
      formData.append("password", password);
      formData.append("code", code);
      formData.append("birthDay", birthDay);
      formData.append("img", img);
      formData.append("department", department);
      formData.append("jobTitle", jobTitle);
      formData.append("schedule", schedule);
      const res = await fetch("http://localhost:3001/user/signup", {
        method: "POST",
        headers: {
          code: code ? code : "user",
        },
        body: formData,
      });
      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const signInUser = createAsyncThunk(
  "user/auth/post",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/user/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login, password }),
      });
      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUsers = createAsyncThunk("users/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch("//localhost:3001/user");
    return res.json();
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});
export const getInfoDoctor = createAsyncThunk(
  "doctor/fetch",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`//localhost:3001/user/${id}`);
      return res.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.signUp = true;
      })
      .addCase(signInUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        localStorage.removeItem("token");
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        console.log(action.payload.token);
        state.loading = false;
        state.signIn = true;
        localStorage.setItem("token", action.payload.token);
      })

      //Получить юзеров

      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getInfoDoctor.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getInfoDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getInfoDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.doctorById = action.payload;
      });
  },
});
export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
