import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  step: number;
  data: Record<string, any>;
}

const initialState: FormState = {
  step: 1,
  data: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    goToStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },

    updateFormData(state, action: PayloadAction<Record<string, any>>) {
      state.data = { ...state.data, ...action.payload };
    },

    resetForm(state) {
      state.step = 1;
      state.data = {};
    },
  },
});

export const { goToStep, updateFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
