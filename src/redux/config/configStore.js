import { createStore } from "redux";
import { combineReducers } from "redux";
import todo from "../modules/todo";

const rootReducer = combineReducers({ todo }); //여러개 리듀서 묶어줄 때는 props 처럼 여러개 쓰면 됨

const store = createStore(rootReducer);

export default store;
