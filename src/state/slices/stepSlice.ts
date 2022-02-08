import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  step: number;
  page: number;
};

const initialState: InitialState = {
  step: 0,
  page: 1,
};

const stepSlice = createSlice({
  name: "stepSlice",
  initialState,
  reducers: {
    nextStep: (state) => ({ ...state, step: 1 }),
    prevStep: (state) => ({ ...state, step: 0 }),
  },
});

export const { nextStep, prevStep } = stepSlice.actions;
export default stepSlice.reducer;
