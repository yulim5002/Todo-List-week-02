import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

let number = 3;
function Todo({ todo, onRemove, TobeDone }) {
  //List로부터 todo, onRemove, TobeDone 받아옴

  const initialState = {
    id: number,
    title: "",
    body: "",
    isDone: false,
  };

  const history = useHistory();
  number++;

  return (
    <div className="todo-container">
      <div>
        <div
          onClick={() => {
            history.push("/detail/" + initialState.id);
          }}
        >
          상세보기
        </div>
        <h2 id="title" className="todo-title">
          {todo.title}
        </h2>
        <div id="body">{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          onClick={() => {
            onRemove(todo.id);
          }}
          className="todo-delete-button button"
        >
          삭제하기
        </button>
        <button
          onClick={() => TobeDone(todo.id)}
          className="todo-complete-button button"
        >
          {todo.isDone ? "취 소" : "완 료"}
        </button>
      </div>
    </div>
  ); // todo.title과 todo.body값이 Todo안에 출력. onRemove함수가 onClick에 의해 발현되어 삭제하기, 취소, 완료버튼 기능 구현됨
}

export default Todo;
