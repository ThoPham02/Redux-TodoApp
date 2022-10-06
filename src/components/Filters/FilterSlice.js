const initState = {
  searchText: "",
  searchStatus: "All",
  searchPriority: [],
};

const filterSliceReducer = (state = initState, action) => {
  switch (action.type) {
    case "filter/searchText":
      return {
        ...state,
        searchText: action.payload,
      };
    case "filter/searchStatus":
      return {
        ...state,
        searchStatus: action.payload,
      };
    case "filter/searchPriority":
      return {
        ...state,
        searchPriority: action.payload,
      };
    default:
      return state;
  }
};

export default filterSliceReducer;
