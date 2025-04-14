import { configureStore } from '@reduxjs/toolkit'
import canvasReducer from './reducers/CanvasSlice'
export const store = configureStore({
  reducer: {
    canvas: canvasReducer,
  },
})
