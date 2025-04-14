
import { createSlice } from '@reduxjs/toolkit';

const CanvasSlice = createSlice({
  name: 'canvas',
  initialState: {
    canvasInstance: null,
  },
  reducers: {
    setCanvas: (state, action) => {
      state.canvasInstance = action.payload;
    },
  },
});

export const { setCanvas } = CanvasSlice.actions;
export default CanvasSlice.reducer;
