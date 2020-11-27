import { combineReducers } from "redux";

import todoReducer from "./TodoReducer";

export default combineReducers({
    todo: todoReducer
})