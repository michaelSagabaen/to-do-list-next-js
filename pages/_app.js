import '../styles/globals.css'
/*import 'tailwindcss/tailwind.css'*/
import { TodosProvider, TodoProvider } from './store';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	const [ todos, setTodos ] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
		.then(res => res.json())
		.then(data =>{
			setTodos(data)
		})
	}, []);
  return (
  	<TodosProvider value={{todos, setTodos}}>
  		<TodoProvider value={{}}>
  			<Component {...pageProps} />
  		</TodoProvider>
  	</TodosProvider>
  )
}

export default MyApp
