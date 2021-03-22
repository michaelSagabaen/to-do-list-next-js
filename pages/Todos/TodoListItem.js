import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { getTodos, deleteTodo } from '../api/todoActions';
import TodoListItem from "./TodoListItem";

class ToDoListItem extends Component {

	componentDidMount(){
		this.props.getTodos();
	}

	componentDidUpdate(nextProps) {
		if(nextProps.newTodo) {
			console.log(this.props)
			this.props.todos.unshift(nextProps.newTodo);
		}
	}
	deleteTodo(id) {
		this.props.deleteTodo(id);
		window.location.href = '/'

	}
	toggleTodo(e) {
		e.preventDefault();
		
	}
	render(){
		const todoItems = this.props.todos.map(todo => (
			  <div key={todo.id}>
			    <a href={todo.id}><h3>{todo.title}</h3></a>
			    <button onClick={this.toggleTodo}>{todo.completed ? "Completed" : "Ongoing"}</button>
			  	<button onClick={() => this.deleteTodo(todo.id)} >Delete</button>
			  </div>
		));
		return(
			<div>
				{todoItems}
			</div>
		)
	}
}

const mapStateToProps = state => ({
  todos: state.todos.items,
  newTodo: state.todos.item,
});

export default connect(mapStateToProps, { getTodos,deleteTodo })(ToDoListItem)