export const filterTextSelector = (state) => state.filter.searchText;

export const filterStatusSelector = (state) => state.filter.searchStatus;

export const filterPrioritySelector = (state) => state.filter.searchPriority;

export const todoListSelector = (state) => {
    console.log(state);
  const filterTodo = state.todoList.filter((todo) => {
    let filterFlag =
      todo.name.includes(state.filter.searchText) &&
      (state.filter.searchStatus === "All" ||
        todo.completed === (state.filter.searchStatus === "Todo")) &&
      (state.filter.searchPriority.length === 0 ||
        state.filter.searchPriority.includes(todo.priority));
    return filterFlag;
  });

  return filterTodo;
};
