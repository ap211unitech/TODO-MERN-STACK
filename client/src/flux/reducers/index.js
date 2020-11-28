import { combineReducers } from "redux";

import todoReducer from "./TodoReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";


export default combineReducers({
    todo: todoReducer,
    error: errorReducer,
    auth: authReducer
})