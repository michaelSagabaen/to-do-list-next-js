import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { useState, useEffect } from 'react';
import { TodosProvider } from './store';

function MyApp({ Component, pageProps }) {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState();
  const [progress, setProgress] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <TodosProvider value={{
      todos, setTodos, filters, setFilters, progress, setProgress,
    }}
    >
        <Component {...pageProps} />
    </TodosProvider>
  );
}

export default MyApp;
