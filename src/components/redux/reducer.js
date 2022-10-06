import filterSliceReducer from "../Filters/FilterSlice";
import todoSliceReducer from "../TodoList/TodoSlice";

const rootReducer = (state = {}, action) => {
  return {
    filter: filterSliceReducer(state.filter, action),
    todoList: todoSliceReducer(state.todoList, action)
  }
};

export default rootReducer;
// spilit reducer
