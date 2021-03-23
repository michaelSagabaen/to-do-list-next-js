import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TodoList from './Todos/TodoList';


const Home = () => {
  return (
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
  )
}

export default Home;
