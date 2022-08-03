import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todos";

// 여기만 styled Component
const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  // console.log(todo);
  const { id } = useParams();
  dispatch(getTodoByID(id));
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getTodoByID(id));
  // }, [dispatch, id]);

  return (
    <><StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID : {todo.id}</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate("/mytodolistredux");
              } }
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{todo.title}</StTitle>
          <StBody>{todo.body}</StBody>
        </div>
      </StDialog>
    </StContainer></>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  border-radius: 10px;
  background-color: none;
  width: 140px;
  color: #fff;
  font-weight: 700;
  font-family: 'jua', cursive;
  box-shadow: 0 0 40px 40px teal inset, 0 0 0 0 teal;
  transition: all 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: black;
    box-shadow: 0 0 10px 0 teal inset, 0 0 10px 4px teal;
  }
`;