import { createSlice } from "@reduxjs/toolkit"

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roles: [],
    isLoading: false,
    isShowModal: false,
    modalContent: null,
    isResetFilter: false,
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
  }
})
export const { toggleLoading, modal, resetFilter } = appSlice.actions

export default appSlice.reducer
