import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from "../components/todosSlice";
import filtersReducer from "../filters/filtersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    filters: filtersReducer,

  },
});
