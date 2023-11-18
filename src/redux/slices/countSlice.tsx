import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const countSlice = createSlice({
  name: "Count",
  initialState: {
    count: 0,
  },
  reducers: {
    increaseCount: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload
    },
  },
})

export const { increaseCount } = countSlice.actions
export default countSlice.reducer
