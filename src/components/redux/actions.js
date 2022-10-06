export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const checkedTodo = (data) => {
  return {
    type: 'todoList/checkedTodo',
    payload: data
  }
}

export const filterText = (data) => {
  return {
    type: 'filter/searchText',
    payload: data
  }
}
export const filterStatus = (data) => {
  return {
    type: 'filter/searchStatus',
    payload: data
  }
}
export const filterPriority = (data) => {
  return {
    type: 'filter/searchPriority',
    payload: data
  }
}