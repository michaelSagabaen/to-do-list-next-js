import { useContext, useState } from "react";
import PropTypes from "prop-types";
import TodosContext from '../store';
import TodoListItem from "./TodoListItem";

const TodoList = () => {
	const { todos, setTodos } = useContext(TodosContext)
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
	  	console.log(todos)
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
			      <hr />
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
			<TodoListItem />
		</div>
	)
}

export default TodoList

/*import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import TodoListItem from "./TodoListItem";
import { createTodo } from '../api/todoActions';

class TodoList extends Component {
	constructor(props) {
	  super(props)
	  this.state = {
	  	id: '',
	  	title: '',
	  };

	  this.onChange = this.onChange.bind(this);
	  this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
	  this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
	  e.preventDefault();

	  const todo = {
	    title: this.state.title,
	  };

	  this.props.createTodo(todo);
	  this.setState({	  	
	  	id: '',
	  	title: '',
	  })
	}

	render(){
		return(
			<div>
				<div>
				  <h2>Add Todo</h2>
				  <form onSubmit={this.onSubmit}>
				    <div>
				      <label>Title: </label>
				      <br />
				      <input
				        type="text"
				        name="title"
				        onChange={this.onChange}
				        value={this.state.title}
				      />
				    </div>
				    <br />
				    <button type="submit">Submit</button>
				  </form>
				</div>
				<TodoListItem />
			</div>
		)
	}
}

TodoList.propTypes = {
	createTodo: PropTypes.func.isRequired
};

export default connect(null, { createTodo })(TodoList);*/