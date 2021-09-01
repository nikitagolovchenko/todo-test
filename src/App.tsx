import React, { useEffect } from 'react';
import { H1, Paragraph, TitleBlock } from './components/Elements';
import Form from './components/Form';
import Layout from './components/Layout';
import Loader from './components/Loader';
import Notification from './components/Notification';
import TodoList from './components/TodoList';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { createTodo, getTodo, selectTodo } from './store/todoSlice';
import GlobalStyle from './theme/GlobalStyle';

function App() {
  const dispatch = useAppDispatch();
  const { todos, loading, error } = useAppSelector(selectTodo);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const handleSubmit = (text: string): void => {
    dispatch(createTodo(text));
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <TitleBlock>
          <H1>Todo App React-Redux-Typescript</H1>
        </TitleBlock>
        <Form submitText='Add todo' placeholder='New todo...' mb onSubmit={handleSubmit} />
        <TodoList todos={todos} />
        {loading && <Loader/>}
        {error && <Notification text={error as string} status='error'/>}
      </Layout>
    </>
  );
}

export default App;
