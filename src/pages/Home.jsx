import React from 'react';
import Layout from '../components/ui/Layout';
import Header from '../components/ui/Header';
import Form from '../features/todos/components/Form';
import List from '../features/todos/components/List';

const Home = () => {
  return (
    <Layout>
      <Header />
      {/* <Form todos={todos} setTodos={setTodos}/>
      <List todos={todos} setTodos={setTodos} /> */}
      <Form/>
      <List/>
    </Layout>
  );
};

export default Home;
