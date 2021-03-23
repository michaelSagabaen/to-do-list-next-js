import { useContext, useState } from "react";
import PropTypes from "prop-types";
import TodosContext from '../store';
import TodoListItem from "./TodoListItem";

const TodoList = () => {
	const { todos, setTodos, setFilters, setProgress } = useContext(TodosContext)
	const [todoTitle, setTodoTitle] = useState();

	const onSubmit = (e) => {
		e.preventDefault();
	  fetch('https://jsonplaceholder.typicode.com/todos', {
	  method: 'POST',
	  headers: {
	    'content-type': 'application/json'
	  },
	  body: JSON.stringify({ title: todoTitle, completed: false })
		})
	  .then(res => res.json())
	  .then(data => {
			todos.unshift(data)
	  	setTodos(todos)
	  	setTodoTitle('') 	
	  })
	}

	return (
		<div>
			<div>
			  <h2>Add Todo</h2>
			  <form onSubmit={onSubmit}>
			    <div>
			      <label>Title: </label>
			      <input
			        type="text"
			        name="title"
			        onChange={(e) => setTodoTitle(e.target.value)}
			        value={todoTitle}
			      />
			    </div>
			    <br />
			    <button type="submit">Submit</button>
			  </form>
			</div>
			<hr />
			<div>
				<input
				  type="text"
				  name="filter"
				  onChange={(e) => setFilters(e.target.value)}
				  placeholder="Search"
				/>
				<input type="radio" name="progress" onClick={() => setProgress(undefined)} defaultChecked/>
				<label>All</label>
				<input type="radio" name="progress" onClick={() => setProgress(true)}/>
				<label>Completed</label>
				<input type="radio" name="progress" onClick={() => setProgress(false)}/>
				<label>Ongoing</label>
			</div>
			<hr />
			<TodoListItem />
		</div>
	)
}

export default TodoList