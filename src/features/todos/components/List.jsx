import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../../redux/modules/todos.js";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  // console.log(todos);
  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <div className="todo-container" key={todo.id}>
                <Link to={`/mytodolistredux/${todo.id}`} >
                <div>상세보기</div>
              </Link>
              <div>
                <h2 className="todo-title">{todo.title}</h2>
                <div>{todo.body}</div>
              </div>
              <div className="button-set">
                <button
                  className="todo-delete-button button"
                  onClick={()=>onDeleteTodo(todo.id)}
                >
                  삭제하기
                </button>
                <button
                  className="todo-complete-button button"
                  onClick={()=>onToggleStatusTodo(todo.id)}
                >
                  {todo.isDone ? "취소" : "완료"}
                </button>
              </div>
              </div>
            );
            

          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <div className="todo-container" key={todo.id}>
                <Link to={`/mytodolistredux/${todo.id}`} >
                  <div>상세보기</div>
                </Link>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <div className="button-set">
                  <button
                    className="todo-delete-button button"
                    onClick={()=>onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </button>
                  <button
                    className="todo-complete-button button"
                    onClick={()=>onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </button>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;

