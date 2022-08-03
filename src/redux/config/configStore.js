import { combineReducers } from "redux";
import {configureStore} from "@reduxjs/toolkit";
import todos from "../modules/todos";

const rootReducer = combineReducers({
  todos: todos,
});
// const store = createStore(rootReducer);
// 기존 createStore 방법
// const store = createStore(reducers, composeWithDevTools(applyMiddleware([...middlewares])));
// 새로운 configureStore 방법, 훨씬 간단함
const store = configureStore({
    reducer : rootReducer, // 리듀서 들을 정의합니다.
    // middleware: [...middlewares], // 미들웨어를 정의해주도록 합니다.
    devTools: process.env.NODE_ENV !== 'production', // devTool 의 옵션을 선택합니다.
  })


export default store;