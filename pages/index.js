import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Provider } from 'react-redux';
import TodoList from './Todos/TodoList';

import store from './store';

const Home = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Head>
          <title>To-Do-List</title>
        </Head>
        <h1>To-Do-List</h1>
        <main className={styles.main}>
          <div>
            <TodoList />
          </div>
        </main>


        <footer className={styles.footer}>
        </footer>
      </div>
    </Provider>
  )
}

export default Home;
