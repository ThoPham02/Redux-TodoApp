const initState = {
  filter: {
    searchText: "",
    searchStatus: "All",
    searchPriority: []
  },
  todoList: [
    { id: 1, name: "Learn React", completed: false, priority: "High" },
    { id: 2, name: "Learn JavaScript", completed: true, priority: "Medium" },
    { id: 3, name: "Learn HTML", completed: true, priority: "Low" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "filter/searchText":
      return {
        ...state,
        filter: { ...state.filter, searchText: action.payload },
      };
    case "filter/searchStatus":
      return {
        ...state,
        filter: { ...state.filter, searchStatus: action.payload },
      };
    case "filter/searchPriority":
      return {
        ...state,
        filter: { ...state.filter, searchPriority: action.payload },
      };
    case 'todoList/checkedTodo':
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    default:
      return state;
  }
};

export default rootReducer;
