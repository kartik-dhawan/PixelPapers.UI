import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { CurrentBlogSliceState } from "../interfaces"
import { OnThisPageLinkObject } from "@/utils/interfaces"

const initialState: CurrentBlogSliceState = {
  onThisPageData: [
    {
      label: "",
      blogSectionId: "",
    },
  ],
}

const currentBlogSlice = createSlice({
  name: "Current Blog",
  initialState,
  reducers: {
    updateOnThisPageData: (
      state: CurrentBlogSliceState,
      action: PayloadAction<OnThisPageLinkObject[]>,
    ) => {
      state.onThisPageData = action.payload
    },
  },
})

export const { updateOnThisPageData } = currentBlogSlice.actions
export default currentBlogSlice.reducer
