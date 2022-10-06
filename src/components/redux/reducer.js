import filterSlice from "../Filters/filterSlice";
import todoSlice from "../TodoList/todoSlice";

const rootReducer = (state = {}, action) => {
  return {
    filter: filterSlice(state.filter, action),
    todoList: todoSlice(state.todoList, action)
  }
};

export default rootReducer;
// spilit reducer
