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
  recordByDoctor: [],
  acceptOrder: false,
  userRecords: [],
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
      formData.append("code", code ? code : "");
      formData.append("birthDay", birthDay);
      formData.append("img", img);
      formData.append("department", department ? department : "000000000000");
      formData.append("jobTitle", jobTitle ? jobTitle : "");
      formData.append("schedule", schedule ? schedule : "");
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
      localStorage.setItem("token", data.token);
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

export const getChatUsers = createAsyncThunk("chatUsers/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch("//localhost:3001/user/users/chatusers");
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
export const addOrder = createAsyncThunk(
  "order/post",
  async ({ _doctorId, date, time }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/record/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          _doctorId,
          date,
          time,
        }),
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
export const getRecordsByDoctor = createAsyncThunk(
  "recordByDoctor/fetch",
  async (id, thunkAPI) => {
    try {
      const data = await fetch(`http://localhost:3001/record/doctor/${id}`);
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      return data.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const getRecordsByRole = createAsyncThunk(
  "recordsrole/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/record/role", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
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
export const removeRecord = createAsyncThunk(
  "records/remove",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/record/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
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

export const addCode = createAsyncThunk(
  "code/patch",
  async ({id, code}, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/invites/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
list: code
        }),
      });
      if (res.error) {
        return thunkAPI.rejectWithValue(res.error);
      }
      return res.json();
    }catch (error) {
    thunkAPI.rejectWithValue(error);
  }})

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.signIn = false;
      state.signUp = false;
    },
    isUserSignIn: (state, action) => {
      state.token = localStorage.getItem("token");
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
        state.loading = false;
        state.signIn = true;
        state.token = action.payload.token;
      })

      //Получить юзеров

      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.acceptOrder = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // получить юзеров чата

      .addCase(getChatUsers.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getChatUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.acceptOrder = false;
      })
      .addCase(getChatUsers.rejected, (state, action) => {
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
      })
      .addCase(getRecordsByDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.recordByDoctor = action.payload;
      })
      .addCase(getRecordsByDoctor.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRecordsByDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.acceptOrder = false;
      })
      .addCase(addOrder.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.acceptOrder = false;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.recordByDoctor.push(action.payload);
        state.acceptOrder = true;
        
      })
      .addCase(addCode.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addCode.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(getRecordsByRole.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userRecords = action.payload;
      })
      .addCase(getRecordsByRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getRecordsByRole.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeRecord.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userRecords = action.payload;
      });
  },
});
export const { userLogout, isUserSignIn } = userSlice.actions;
export default userSlice.reducer;
