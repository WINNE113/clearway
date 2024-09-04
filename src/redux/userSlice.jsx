import { createSlice } from "@reduxjs/toolkit"

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
})
export const { login, logout, clearMessage, selectRole } = userSlice.actions

export default userSlice.reducer
