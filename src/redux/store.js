import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import crudSlice from "./slices/crudSlice";
export default configureStore({
  reducer: { counterSlice, crudSlice },
});
