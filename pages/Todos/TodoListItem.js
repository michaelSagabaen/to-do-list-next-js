import { useContext } from "react";
import PropTypes from "prop-types";
import TodosContext from '../store';
import TodoContext from '../store';
import { useRouter } from 'next/router';

const ToDoListItem = () => {

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
	const todoItems = todos.map(todo => (
	  <div key={todo.id}>
	  	{todo.completed ? 
	    	<a href={todo.id}><h3>{todo.title}</h3></a> :
	    	<a href={todo.id}><s><h3>{todo.title}</h3></s></a>
	  	}
	  	<button onClick={() => deleteTodo(todo.id)}>Delete</button>
	  </div>
	));
	return(
		<div>
			{todoItems}
		</div>
	)
}

const mapStateToProps = state => ({
  todos: state.todos.items,
  newTodo: state.todos.item,
});

export default ToDoListItem