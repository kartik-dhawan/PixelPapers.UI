import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TravelSliceState } from "../interfaces"
import { TravelBlogPost } from "@/utils/interfaces"

const initialState: TravelSliceState = {
  blogs: [],
  currentBlog: {},
}

const travelSlice = createSlice({
  name: "Travel",
  initialState,
  reducers: {
    addAllTravelBlogs: (
      state: TravelSliceState,
      action: PayloadAction<any[]>,
    ) => {
      state.blogs = action.payload
    },
    addCurrentBlog: (
      state: TravelSliceState,
      action: PayloadAction<TravelBlogPost>,
    ) => {
      state.currentBlog = action.payload
    },
  },
})

export const { addAllTravelBlogs, addCurrentBlog } = travelSlice.actions
export default travelSlice.reducer
