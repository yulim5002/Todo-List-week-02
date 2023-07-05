import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = (props) => {
  const { id } = useParams((state) => state.id);
  const todo = useSelector((state) => state.todo);
  console.log({ id }, todo);
  const find_todo = todo.find(function (todo) {
    //find함수
    console.log(todo);
    if (todo.id === id) {
      return todo;
    }
  });
  console.log(find_todo); ///////find_todo에 뭐가나오는지 보여줘 -> detail console에서 undefined나오는이유
  const history = useHistory();

  return (
    /////// initialState 외의 todolist들은 id값을 못불러옴
    <div>
      <p>ID:{find_todo.id}</p>
      <h1>{find_todo.title}</h1>
      <p>{find_todo.body}</p>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        이전으로
      </button>
    </div>
  );
};

export default Detail;
