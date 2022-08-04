import React, { useState, useRef } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/modules/todos.js";

const Form = () => {
  //useRef를 이용하여 id 값 생성, 예제가 1개라서 1부터 시작
const nextId = useRef(1);
let today = new Date();
let year = today.getFullYear();
let month = ('0' + (today.getMonth() + 1)).slice(-2);
let day = ('0' + today.getDate()).slice(-2);
let hours = ('0' + today.getHours()).slice(-2); 
let minutes = ('0' + today.getMinutes()).slice(-2);
let seconds = ('0' + today.getSeconds()).slice(-2); 
let id = year + '-' + month  + '-' + day+"_"+hours + ":" + minutes + ":" + seconds+"_";
// console.log(today.toString());
  // dispatch 생성
  const dispatch = useDispatch();
  const initialState = {
    id: id+nextId.current,
    title: "",
    body: "",
    isDone: false,
  };
  const [todo, setTodo] = useState(initialState);
  // 특정 컴포넌트 지정하기 위해 useRef() 사용
  // useRef 활용해서, onChangeHandler 안 사용하려 했으나 실패
  // render 문제가 생김
  const title = useRef(null);
  // const body = useRef(null);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // const title_tmp = title.current.value;
    // const body_tmp = body.current.value;
    nextId.current +=1;
    // setTodo({...todo, title:title_tmp, body:body_tmp, id})
    if (todo.title.trim() === "" ||  todo.body.trim() === "") return;
    dispatch(addTodo({ ...todo, id:id+nextId.current}));
    // e.target.reset();
    setTodo(initialState);
    title.current.focus();
  };
// onChange랑 valus랑 같이 쓰인다.
  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          ref={title}
          value={todo.title}
          className="add-input input-body"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          // ref={body}
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
