// const initState = {
// searchText: "",
// searchStatus: "All",
// searchPriority: [],
// };

// const filterSliceReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/searchText":
//       return {
//         ...state,
//         searchText: action.payload,
//       };
//     case "filter/searchStatus":
//       return {
//         ...state,
//         searchStatus: action.payload,
//       };
//     case "filter/searchPriority":
//       return {
//         ...state,
//         searchPriority: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filterSliceReducer;
import { createSlice } from "@reduxjs/toolkit";

// createSlice giúp tạo 1 action {
//   type:'filter/searchText',
//   payload: data
// }
// code trong reducer viết dưới dạng  mutation (thay đổi trực tiếp)
// nhưng có hiệu quả như immutation (thay đổi nhờ bản copy) nhờ thư viện IMMER
export default createSlice({
  name: "filter",
  initialState: {
    searchText: "",
    searchStatus: "All",
    searchPriority: [],
  },
  reducers: {
    filterText: (state, action) => {
      state.searchText = action.payload;
    },
    filterStatus: (state, action) => {
      state.searchStatus = action.payload;
    },
    filterPriority: (state, action) => {
      state.searchPriority = action.payload;
    },
  },
});
