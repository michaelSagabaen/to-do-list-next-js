import { useState, useContext } from "react";
import PropTypes from "prop-types";
import TodosContext from '../store';
import TodoContext from '../store';
import { useRouter } from 'next/router';

const ToDoListItem = () => {

	const [disabled, setDisabled] = useState(true);
	const [newTitle, setNewTitle] = useState('');
	const { todos, setTodos } = useContext(TodosContext)
	const deleteTodo = (id) => {
	  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
	  method: 'DELETE'
		})
	  .then(res => {
	  	if (res.staus = 200){
	  		setTodos(todos.filter((todo) => todo.id !== id))
	  	}
	  })
	}
	const toggleEdit = (todo) => {
		console.log(todo.id < 201)
	  if (todo.id < 201) {
	  	fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
	  	  method: 'PUT',
	  	  headers: {
	  	    'content-type': 'application/json'
	  	  },
	  	  body: JSON.stringify({completed: !todo.completed})
  		})
  	  .then(res => res.json())
  	  .then(data =>
  	  	setTodos((todos) => { 
  	  		const updatedTodos = todos.map((todoItem) => 
  	  			todoItem.id === data.id ? {...todoItem, completed: data.completed} : todoItem
  	  		)
  	  		return updatedTodos;
  	  	})
  	  );
	  } else {
	  	setTodos((todos) => { 
	  		const updatedTodos = todos.map((todoItem) => 
	  			todoItem.id === todo.id ? {...todoItem, completed: !todo.completed} : todoItem
	  		)
	  		return updatedTodos;
	  	})
	  }
	}
	const todoItems = todos.map(todo => (
	  <div key={todo.id}>
	  	{todo.completed ? <s><p>{todo.title}</p></s> : <p>{todo.title}</p>}
	  	<input type="checkbox" id={todo.id} checked={todo.completed} onClick={() => toggleEdit(todo)}/>
	  	<button onClick={() => deleteTodo(todo.id)}>Delete</button>
	  </div>
	));
	return(
		<div>
			{todoItems}
		</div>
	)
}

export default ToDoListItem