import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ContentSliceState } from "../interfaces"

const initialState: ContentSliceState = {
  content: {},
}

const contentSlice = createSlice({
  name: "Contentful",
  initialState,
  reducers: {
    updateContentfulData: (
      state: ContentSliceState,
      action: PayloadAction<any>,
    ) => {
      state.content = action.payload
    },
  },
})

export const { updateContentfulData } = contentSlice.actions
export default contentSlice.reducer
