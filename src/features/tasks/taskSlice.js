import { createSlice } from "@reduxjs/toolkit";
/* import {PayloadAction} from '@reduxjs/toolkit' */

const initialState = [
  {
    id: "1",
    title: "tarea 1",
    Description: "Hola mundo",
    completed: false,
  },
  {
    id: "2",
    title: "tarea 2",
    Description: "hello world",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskF = state.find((task) => task.id === action.payload);
      if(taskF){
        state.splice(state.indexOf(taskF),1)
      }
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
