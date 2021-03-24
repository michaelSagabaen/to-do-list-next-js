import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import TodoList from './Todos/TodoList';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
      <title>To-Do-List</title>
    </Head>
    <h1 className="text-xl font-bold py-6 font-mono">To-Do-List</h1>
    <main>
      <div>
        <TodoList />
      </div>
    </main>
  </div>
);

export default Home;
