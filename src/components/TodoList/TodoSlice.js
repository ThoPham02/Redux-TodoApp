const initState = [
  { id: 1, name: "Learn React", completed: false, priority: "High" },
  { id: 2, name: "Learn JavaScript", completed: true, priority: "Medium" },
  { id: 3, name: "Learn HTML", completed: true, priority: "Low" },
];

const todoSliceReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/checkedTodo":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoSliceReducer;
