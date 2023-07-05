// Actions

const CREATE_TODOS = "CREATE_TODOS";
const UPDATE_TODOS = "UPDATE_TODOS";
const REMOVE_TODOS = "REMOVE_TODOS";
const TODOS_ID = "TODOS_ID";

// Action Creator
export const create_todos = (payload) => {
  return {
    type: CREATE_TODOS,
    payload: payload,
  };
};

export const update_todos = (payload) => {
  return {
    type: UPDATE_TODOS,
    payload: payload,
  };
};

export const remove_todos = (payload) => {
  return {
    type: REMOVE_TODOS,
    payload: payload,
  };
};

export const todos_id = (payload) => {
  return {
    type: TODOS_ID,
    payload: payload,
  };
};

// initial state
const initialState = {
  todos: [
    {
      id: "1",
      title: "react를 배워봅시다.",
      body: "함수형 컴포넌트는?",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODOS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case REMOVE_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case UPDATE_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };

    case TODOS_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload; ////////////////
        }),
      };
    default:
      return state;
  }
};

export default todos;
