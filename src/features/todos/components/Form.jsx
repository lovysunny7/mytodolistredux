import React, { useState, useRef } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/modules/todos.js";

const Form = () => {
  //useRef를 이용하여 id 값 생성, 예제가 1개라서 1부터 시작
  // const nextId = useRef(1);
let today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);
var hours = ('0' + today.getHours()).slice(-2); 
var minutes = ('0' + today.getMinutes()).slice(-2);
var seconds = ('0' + today.getSeconds()).slice(-2); 
let id = year + '-' + month  + '-' + day+"_"+hours + ":" + minutes + ":" + seconds;
// console.log(today.toString());
  // dispatch 생성
  const dispatch = useDispatch();
  const initialState = {
    id: id,
    title: "",
    body: "",
    isDone: false,
  };
  const [todo, setTodo] = useState(initialState);

  // const todos = useSelector((state) => state.todos.todos);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    // nextId.current +=1;
    dispatch(addTodo({ ...todo, id }));
    setTodo(initialState);
  };
// onChange랑 valus랑 같이 쓰인다.
  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input input-body"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
