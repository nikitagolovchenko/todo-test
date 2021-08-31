import React from 'react';
import { H1, Paragraph, TitleBlock } from './components/Elements';
import Form from './components/Form';
import Layout from './components/Layout';
import TodoList from './components/TodoList';
import GlobalStyle from './theme/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <TitleBlock>
          <H1>Todo App React-Redux-Typescript</H1>
        </TitleBlock>
        <Form submitText='Add todo'/>
        <TodoList/>
      </Layout>
    </>
  );
}

export default App;
