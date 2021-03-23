import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { TodosProvider, TodoProvider } from './store';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	const [todos, setTodos] = useState([]);
	const [filters, setFilters] = useState();
	const [progress, setProgress] = useState();

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
		.then(res => res.json())
		.then(data =>{
			if(filters) {
				let filter = new RegExp(filters, 'i');
				let filteredData = data.filter(todo => todo.title.match(filter))
				if(progress !== undefined) {
					setTodos(filteredData.filter(todo => todo.completed === progress));
				} else {
					setTodos(filteredData)
				}
			} else if (progress !== undefined) {
				setTodos(data.filter(todo => todo.completed === progress));
			} else {
				setTodos(data)
			}
		})
	}, [filters, progress]);
  return (
  	<TodosProvider value={{todos, setTodos, setFilters, setProgress}}>
  		<TodoProvider value={{}}>
  			<Component {...pageProps} />
  		</TodoProvider>
  	</TodosProvider>
  )
}

export default MyApp
