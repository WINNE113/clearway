import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getCurrent, loginThunk } from "./action"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    current: null,
    token: null,
    mes: "",
    selectedRole: "",
    selectedUserName: "",
    wishlist: [],
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token
    },
    logout: (state) => {
      state.current = null
      state.token = null
      state.mes = ""
    },
    clearMessage: (state) => {
      state.mes = ""
    },
    selectRole: (state, action) => {
      state.selectedRole = action.payload.role
      state.selectedUserName = action.payload.userName
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.current = action.payload; // Cập nhật thông tin người dùng nếu cần
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.mes = action.error.message || "Có lỗi xảy ra!";
        state.token = null;
      })
      .addCase(getCurrent.fulfilled, (state, action) => {
        console.log("useSlice: " + JSON.stringify(action.payload));
        state.current = action.payload;
      })
      .addCase(getCurrent.rejected, (state) => {
        state.current = null;
        state.token = null;
        state.wishlist = [];
      });
  },
})
export const { login, logout, clearMessage, selectRole } = userSlice.actions

export default userSlice.reducer
