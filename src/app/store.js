import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    task: reducer,
  },
});
