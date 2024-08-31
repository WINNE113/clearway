import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import appSlice from "./appSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import commentSlice from "./commentSlice"

const commonConfig = {
  key: "clearway",
  storage,
}
const userConfig = {
  ...commonConfig,
  whitelist: ["token", "current"],
}

export const store = configureStore({
  reducer: {
    user: persistReducer(userConfig, userSlice),
    app: appSlice,
    comment: commentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)
