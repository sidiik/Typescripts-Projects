import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/TodoSlice';

const store = configureStore({
  reducer: {
    todoSlice: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
