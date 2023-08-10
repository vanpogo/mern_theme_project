import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios/axios.js";

const initialState = {
  user: {},
  isLoading: false,
  token: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/register", payload);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
      console.log(e);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/login", payload);
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
      console.log(e);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/auth/check");
      return data;
    } catch (e) {
      console.log(e);
      thunkAPI.rejectWithValue(e);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    //REGISTER
    builder.addCase(registerUser.pending, (state, { payload }) => {
      state.isLoading = true;
      state.user = null;
      state.token = null;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
    });

    //LOGIN
    builder.addCase(loginUser.pending, (state, { payload }) => {
      state.isLoading = true;
      state.user = null;
      state.token = null;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
    });

    //CHECK
    builder.addCase(checkAuth.pending, (state) => {
      state.isLoading = true;
      state.user = null;
      state.token = null;
    });
    builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload?.user;
      state.token = payload?.token;
    });
    builder.addCase(checkAuth.rejected, (state) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
    });
  },
});

export const isCheckAuth = (state) => Boolean(state.auth.token);
export const { logOut } = authSlice.actions;
export default authSlice.reducer;
