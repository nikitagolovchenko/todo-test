import React from 'react';
import { useAppDispatch } from '../hooks/reduxHooks';
import { changeTodo, completedTodo, deleteTodo } from '../store/todoSlice';
import { Paragraph, TitleBlock } from './Elements';
import TodoItem from './TodoItem';
interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: number): void => {
    dispatch(deleteTodo(id));
  }

  const handleCompleted = ({id, completed}: {id: number, completed: boolean}): void => {
    dispatch(completedTodo({id, completed}))
  }

  const handleChange = (id: number,text: string): void => {
    dispatch(changeTodo({id, text}));
  }

  return (
    <>
      {todos && (
        todos.map(todo => (
          <TodoItem {...todo} handleDelete={handleDelete} handleCompleted={handleCompleted} handleChange={handleChange} key={todo.id} />
        ))
      )}
      {!todos.length && (
        <TitleBlock>
          <Paragraph>You don't have todos</Paragraph>
        </TitleBlock>
      )}
    </>
  );
};

export default TodoList;
