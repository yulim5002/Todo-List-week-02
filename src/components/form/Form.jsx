import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./style.css";
import { creatTodo } from "../../redux/modules/todo";

let number = 3; // id 1,2 존재힘으로 3부터 커지도록 지정

function Form() {
  // state란 컴포넌트 내부에서 바뀔 수 있는 값을 의미, useState란 hook은 먼저 const로 선언을 하고,
  // [] 빈 배열을 생성하고, 배열의 첫 번째 자리에는 이 state의 이름, 두번째 자리에는 set을 붙이고 state의 이름을 붙인다.
  // 그리고 useState는 이 state의 원하는 처음값을 넣어준다. 처음 값은 initial state라고 하는데 언제든 변할 수 있는 값이기 때문에 처음 값 이라는 개념이 존재한다.
  const [todos, setTodos] = useState([
    // 변수를 useState를 사용하여 선언 -> todolist의 제목과 할일, 다른 이벤트에서 구분을 위한 id값 , 완료 여부로 구성
    {
      id: 1,
      title: "react 공부하기!",
      body: "props 구조 및 함수형 컴포넌트 알아보자",
      isDone: false,
    },
    {
      id: 2,
      title: "스터디 발표 준비",
      body: "재귀함수 및 클로저 공부하기",
      isDone: true,
    },
  ]);

  const todo = useSelector((state) => state.todo); // useSelector를 사용해서 리덕스 스토어의 상태를 조회 할 땐 만약 상태가 바뀌지 않았으면 리렌더링하지 않습니다.
  const dispatch = useDispatch();

  const initialState = {
    id: number,
    title: "",
    body: "",
    isDone: false, //초기값
  };

  const [inputTodo, setInputTodo] = useState(initialState);

  const onChangeHandler = (event) => {
    // onChange라는 이벤트 핸들러를 state와 연결하여 input에  이벤트를 넣어주고, 우리가 생성한 이벤트 핸들러 함수를 넣어준다.
    const { value, name } = event.target;
    console.log(value, name);
    setInputTodo({ ...inputTodo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    //submit이면 수신하는 이벤트를 생략한다.
    console.log(event); //form이 제출될때마다 실행하는 함수를 만들 수 있다
    event.preventDefault(); // submit 후 서버에 resquest를 보내는 것은 기본으로 실행되는 동작으로 새로고침이 되면 모든 동작들이 리로드가 되기 때문에 이것을 막기위해 preventDefault를 실행해준다.
    setTodos([...todos, { ...inputTodo, id: number }]);
    setInputTodo(initialState);
    number++;
    dispatch(creatTodo({ ...inputTodo, id: number }));
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          className="add-input1"
          type="text"
          name="title"
          value={inputTodo.title} //input1의 value값은 inputTodo의 title
          onChange={onChangeHandler}
        />{" "}
        {/* onChangeHandler는 input값에 적용시킴. input에서는 보통 사용자가
        입력한 값을 state로 관리하는 패턴을 많이 사용함. input, useState를
        이용해 input값을 넣을 value라는 state를 생성했다. */}
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          className="add-input2"
          value={inputTodo.body} //input2의 value값은 inputTodo의 body
          onChange={onChangeHandler}
        />
      </div>
      <button className="addTodos">추가하기</button>
    </form>
  );
}

export default Form;
