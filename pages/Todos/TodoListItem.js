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
	  <li key={todo.id} class="h-6 flex justify-between items-center sm:h-7">
	  	<input class="" type="checkbox" id={todo.id} checked={todo.completed} onClick={() => toggleEdit(todo)}/>
	  	{todo.completed ? <s class="text-left justify-self-start text-sm px-3 font-bold text-gray-400">{todo.title}</s> : <inline class="text-sm px-3 font-bold text-gray-900">{todo.title}</inline>}
	  	<button class="text-red-400 hover:text-red-600" onClick={() => deleteTodo(todo.id)}><i class="fa fa-trash" aria-hidden="true"></i></button>
	  </li>
	));
	return(
		<ul class="bg-green-100">
			{todoItems}
		</ul>
	)
}

export default ToDoListItem