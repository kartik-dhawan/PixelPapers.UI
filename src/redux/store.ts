import { configureStore } from "@reduxjs/toolkit"
import contentSlice from "./slices/contentSlice"
import travelSlice from "./slices/travelSlice"

export const store = configureStore({
  reducer: {
    contentSlice,
    travelSlice,
  },
})

export type RootType = ReturnType<typeof store.getState>
