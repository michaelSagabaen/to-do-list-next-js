import React, { useContext, useState } from 'react';
import TodosContext from '../store';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const {
    todos, setTodos, setFilters, setProgress,
  } = useContext(TodosContext);
  const [todoTitle, setTodoTitle] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ title: todoTitle, completed: false }),
    })
      .then((res) => res.json())
      .then((data) => {
        todos.unshift(data);
        setTodos(todos);
        setTodoTitle('');
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              name="title"
              onChange={(e) => setTodoTitle(e.target.value)}
              value={todoTitle}
              placeholder="Add Todo List"
            />
            <button className="ml-3 my-2 px-4 py-1 bg-blue-800 hover:bg-blue-400 text-white rounded-lg" type="submit">Add To Do</button>
          </div>
        </form>
      </div>
      <hr />
      <div className="h-6 flex items-center sm:h-7 my-2">
        <input
          type="text"
          name="filter"
          onChange={(e) => setFilters(e.target.value)}
          placeholder="Search"
        />
        <input id="all" type="radio" name="progress" onClick={() => setProgress(undefined)} defaultChecked />
        <label htmlFor="all" className="pr-4 pl-1">All</label>
        <input id="complete" type="radio" name="progress" onClick={() => setProgress(true)} />
        <label htmlFor="complete" className="pr-4 pl-1">Completed</label>
        <input id="ongoing" type="radio" name="progress" onClick={() => setProgress(false)} />
        <label htmlFor="ongoing" className="pr-4 pl-1">Ongoing</label>
      </div>
      <hr />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
