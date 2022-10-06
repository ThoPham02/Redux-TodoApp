// import rootReducer from "./reducer";
// const { createStore } = require("@reduxjs/toolkit");

// const store = createStore(rootReducer)

// export default store

import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../Filters/filterSlice";
import todoSlice from "../TodoList/todoSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    todoList: todoSlice.reducer,
  },
});

export default store;
