import { configureStore } from "@reduxjs/toolkit"
import contentSlice from "./slices/contentSlice"

export const store = configureStore({
  reducer: {
    contentSlice,
  },
})

export type RootType = ReturnType<typeof store.getState>
