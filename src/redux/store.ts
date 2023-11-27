import { configureStore } from "@reduxjs/toolkit"
import contentSlice from "./slices/contentSlice"
import travelSlice from "./slices/travelSlice"
import currentBlogSlice from "./slices/currentBlogSlice"

export const store = configureStore({
  reducer: {
    contentSlice,
    travelSlice,
    currentBlogSlice,
  },
})

export type RootType = ReturnType<typeof store.getState>
