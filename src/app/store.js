import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import customCounterReducer from '../features/counter/customCounterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    customCounter: customCounterReducer,
  },
});
