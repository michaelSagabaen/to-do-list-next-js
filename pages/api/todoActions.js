import { GET_TODOS, GET_TODO, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './types';

export const getTodos = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(todos =>
    dispatch({
      type: GET_TODOS,
      payload: todos
    })
  );
};

export const getTodo = id => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => res.json())
  .then(todo =>
    dispatch({
      type: GET_TODO,
      payload: todo
    })
  );
};

export const createTodo = todoData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(todoData)
	})
  .then(res => res.json())
  .then(todo =>
	    dispatch({
	      type: CREATE_TODO,
	      payload: todo
	    })
  );
};

export const updateTodo = todoData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(todoData)
	})
  .then(res => res.json())
  .then(todo =>
    dispatch({
      type: UPDATE_TODO,
      payload: todo
    })
  );
};

export const deleteTodo = id => dispatch => {
  console.log(id)
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
  method: 'DELETE'
	})
  .then(res => res.json())
  .then(todo =>
    dispatch({
      type: DELETE_TODO,
    })
  );
};