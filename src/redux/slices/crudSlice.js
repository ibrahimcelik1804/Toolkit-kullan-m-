import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
//1. başlangıç state
const initialState = {
  tasks: [
    {
      id: "asd123",
      title: "Navbar Animasyonu",
      author: "Ahmet",
      assigned_to: "Mehmet",
      end_date: "2024-01-01",
    },
    {
      id: "vfb 5235",
      title: "Footer Responsive",
      author: "Ahmet",
      assigned_to: "Mehmet",
      end_date: "2024-01-01",
    },
  ],
};
//2. slice oluştur
const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      action.payload.id = v4();
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      //1.filter
      // const filtred = state.tasks.filter((task) => task.id != action.payload);
      // state.tasks = filtred;
      //2. splice
      const i = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks.splice(i, 1);
    },
    editTask: (state, action) => {
      const i = state.tasks.findIndex((task) => task.id === action.payload.id);
      state.tasks.splice(i, 1, action.payload);
    },
  },
});
//3. aksiyomları tek tek export et
export const { addTask, editTask, deleteTask } = crudSlice.actions;
//4. reducer export et
export default crudSlice.reducer;
