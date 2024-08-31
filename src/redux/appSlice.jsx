import { createSlice } from "@reduxjs/toolkit"
import { getProvinces, getTopProvince } from "./actions"

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roles: [],
    isLoading: false,
    isShowModal: false,
    modalContent: null,
    provinces: [],
    isResetFilter: false,
    topProvinces: [],
  },
  reducers: {
    toggleLoading: (state, action) => {
      state.isLoading = action.payload
    },
    modal: (state, action) => {
      state.isShowModal = action.payload.isShowModal
      state.modalContent = action.payload.modalContent
    },
    resetFilter: (state, action) => {
      state.isResetFilter = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProvinces.fulfilled, (state, action) => {
      state.provinces = action.payload
    })
    builder.addCase(getTopProvince.fulfilled, (state, action) => {
      state.topProvinces = action.payload
    })
  },
})
export const { toggleLoading, modal, resetFilter } = appSlice.actions

export default appSlice.reducer
