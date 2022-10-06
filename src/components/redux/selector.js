import { createSelector } from "reselect";

export const filterTextSelector = (state) => state.filter.searchText;

export const filterStatusSelector = (state) => state.filter.searchStatus;

export const filterPrioritySelector = (state) => state.filter.searchPriority;

export const todoListSelector = (state) => state.todoList;

export const todoRemaining = createSelector(
  filterTextSelector,
  filterStatusSelector,
  filterPrioritySelector,
  todoListSelector,
  (filterText, filterStatus, filterPriority, todoList) => {
    const filterTodo = todoList.filter((todo) => {
      let filterFlag =
        todo.name.includes(filterText) &&
        (filterStatus === "All" ||
          todo.completed === (filterStatus === "Todo")) &&
        (filterPriority.length === 0 || filterPriority.includes(todo.priority));
      return filterFlag;
    });

    return filterTodo;
  }
);
