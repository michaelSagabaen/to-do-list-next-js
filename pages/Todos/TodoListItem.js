import React, { useEffect, useState, useContext } from 'react';

import { useRouter } from 'next/router';
import TodosContext from '../store';

const ToDoListItem = () => {
  const {
    todos, setTodos, filters, progress,
  } = useContext(TodosContext);
  const [disabled, setDisabled] = useState(true);
  const [newTitle, setNewTitle] = useState('');
  const [displayTodos, setDisplayTodos] = useState(todos);
  const deleteTodo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        {res.ok ? setTodos(todos.filter((todo) => todo.id !== id)) : null}

      });
  };
  const toggleEdit = (todo) => {
    if (todo.id < 201) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ completed: !todo.completed }),
      })
        .then((res) => res.json())
        .then((data) => setTodos((todo) => {
          const updatedTodos = todo.map((todoItem) => (todoItem.id === data.id ? {
          	...todoItem, completed: data.completed,
          }
            : todoItem));
          return updatedTodos;
        }));
    } else {
      setTodos((todo) => {
        const updatedTodos = todo.map((todoItem) => (todoItem.id === todo.id ? {
          ...todoItem, completed: !todo.completed,
        }
          : todoItem));
        return updatedTodos;
      });
    }
  };
  useEffect(() => {
    if (filters) {
      const filter = new RegExp(filters, 'i');
      const filteredData = todos.filter((todo) => todo.title.match(filter));
      if (progress !== undefined) {
        setDisplayTodos(filteredData.filter((todo) => todo.completed === progress));
      } else {
        setDisplayTodos(filteredData);
      }
    } else if (progress !== undefined) {
      setDisplayTodos(todos.filter((todo) => todo.completed === progress));
    } else {
      setDisplayTodos(todos);
    }
  }, [progress, filters, todos]);

  const todoItems = displayTodos.map((todo) => (
    <li key={todo.id} className="h-6 flex justify-between items-center sm:h-7">
      <input className="mx-2" type="checkbox" id={todo.id} checked={todo.completed} onClick={() => toggleEdit(todo)} />
      {todo.completed ? <s className="font-mono text-left justify-self-start text-sm px-3 font-bold text-gray-400">{todo.title}</s> : <inline className="font-mono text-sm px-3 font-bold text-gray-900">{todo.title}</inline>}
      <button className="px-2 text-yellow-500 hover:text-red-600" onClick={() => deleteTodo(todo.id)}><i className="fa fa-trash" aria-hidden="true" /></button>
    </li>
  ));
  return (
    <ul className="bg-yellow-100 divide-black divide-y divide-opacity-25">
      {todoItems}
    </ul>
  );
};

export default ToDoListItem;
