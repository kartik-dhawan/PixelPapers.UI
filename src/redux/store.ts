import { configureStore } from "@reduxjs/toolkit"
import countSlice from "./slices/countSlice"

export const store = configureStore({
  reducer: {
    countSlice,
  },
})

export type RootType = ReturnType<typeof store.getState>
