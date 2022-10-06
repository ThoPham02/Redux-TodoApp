import rootReducer from "./reducer";
const { createStore } = require("@reduxjs/toolkit");

const store = createStore(rootReducer)

export default store