import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove_todos, update_todos } from "../../redux/modules/todo";
import styled from "styled-components";

function List() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  const onRemove = (selectedId) => {
    dispatch(remove_todos(selectedId));
  };

  const TobeDone = (selectedId) => {
    dispatch(update_todos(selectedId));
  };

  return (
    <ListContainer>
      <H2>Work 😖</H2>
      <ListWrapper>
        {todos.map((todo) => {
          if (todo.isDone === false) {
            return (
              <TodoContainer key={todo.id}>
                <Todobox>
                  <Details
                    key={todo.id}
                    onClick={() => {
                      navigate("/detail/" + todo.id);
                    }}
                  >
                    Click
                  </Details>
                  <TodoTitle>{todo.title}</TodoTitle>
                  <TodoBody id="body">{todo.body}</TodoBody>
                </Todobox>
                <ButtonSet>
                  <Delete
                    onClick={() => {
                      onRemove(todo.id);
                    }}
                  >
                    삭제
                  </Delete>
                  <Complete onClick={() => TobeDone(todo.id)}>
                    {todo.isDone ? "취 소" : "완 료"}
                  </Complete>
                </ButtonSet>
              </TodoContainer>
            );
          }
        })}
      </ListWrapper>
      <H2>✨ Done!! ✨</H2>
      <ListWrapper>
        {todos.map((todo) => {
          if (todo.isDone === true) {
            return (
              <TodoContainer key={todo.id}>
                <Todobox>
                  <Details
                    key={todo.id}
                    onClick={() => {
                      navigate("/detail/" + todo.id);
                    }}
                  >
                    Click
                  </Details>
                  <TodoTitle>{todo.title}</TodoTitle>
                  <TodoBody id="body">{todo.body}</TodoBody>
                </Todobox>
                <ButtonSet>
                  <Delete
                    onClick={() => {
                      onRemove(todo.id);
                    }}
                  >
                    삭제하기
                  </Delete>
                  <Complete onClick={() => TobeDone(todo.id)}>
                    {todo.isDone ? "취 소" : "완 료"}
                  </Complete>
                </ButtonSet>
              </TodoContainer>
            );
          }
        })}
      </ListWrapper>
    </ListContainer>
  );
}

export default List;

const ListContainer = styled.div`
  padding: 0 24px;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const H2 = styled.h2``;

const ListWrapper = styled.div`
  flex-wrap: wrap;
  gap: 12px;
  display: flex;
`;
const TodoContainer = styled.div`
  border: #b0c0da 1px dashed;
  border-radius: 12px;
  height: 165px;
  width: 270px;
  padding: 12px 24px 12px;
  background-color: aliceblue;
  background-image: url("https://i.namu.wiki/i/Uymut0CpE-aZqD8nAd-ydKs9SvBI5tqfEskjNDGFETdUIEtu2zOM84VP_33AuBHYyok4w7WTM-beIgRDT_qL55XCqHrN4OPtDl8YREGiEyE6ixAC8U_Xu8UaEHV1nTJCVDE9jVrXeFPhgXqPeY0A2Q.svg");
  background-size: 100px;
  background-repeat: no-repeat;
  background-position: right top;
`;
const Todobox = styled.div``;

const Details = styled.button`
  width: 60px;
  height: 20px;
  border: 1px;
  border-radius: 5px;
`;

const TodoTitle = styled.h2``;

const TodoBody = styled.div``;

const ButtonSet = styled.div`
  gap: 10px;
  display: flex;
  margin-top: 24px;
`;
const Delete = styled.button`
  background-color: rgb(35, 8, 87);
  border: 2px rgb(35, 8, 87);
  border-radius: 10px;
  color: white;
  height: 40px;
  width: 50%;
`;
const Complete = styled.button`
  background-color: rgb(35, 8, 87);
  border: 2px rgb(35, 8, 87) solid;
  border-radius: 10px;
  height: 40px;
  color: white;
  width: 50%;
`;
