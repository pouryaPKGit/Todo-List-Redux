import { legacy_createStore, combineReducers } from "redux";

import todosReducer from "./store/Todos";

const store = legacy_createStore(todosReducer);

export default store;
