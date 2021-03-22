import React, { Component } from "react";
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

export default connect(null, { createTodo })(TodoList);