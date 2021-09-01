import React from 'react';
import styled from 'styled-components';
import { Button, Paragraph } from './Elements';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import Form from './Form';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const TodoWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.spacing[1]};
  padding: ${(props) => props.theme.spacing[1]};
  padding-left: ${(props) => props.theme.spacing[2]};
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: ${(props) => props.theme.borderRadius};

  &:last-child {
    margin-bottom: 0;
  }
`;

const TodoBlock = styled.div`
  margin-bottom: ${(props) => props.theme.spacing[1]};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TodoControls = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -5px;
  padding-left: 30px;

  & > * {
    margin: 0 5px;
  }
`;

const TodoText = styled.div`
  flex-grow: 1;
`;

interface TodoItemProps extends Todo {
  handleDelete: (id: number) => void;
  handleCompleted: ({
    id,
    completed,
  }: {
    id: number;
    completed: boolean;
  }) => void;
  handleChange: (id: number, text: string) => any;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  handleDelete,
  handleCompleted,
  handleChange,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleSubmitChange = (value: string) => {
    handleChange(id, value);
    setEdit(false);
  };

  return (
    <TodoWrapper>
      <TodoBlock>
        <TodoText>
          <Paragraph lineThrough={completed}>{text}</Paragraph>
        </TodoText>
        <TodoControls>
          <Button
            type='button'
            variant='primary'
            circle
            boxShadow={edit}
            onClick={() => setEdit(!edit)}
          >
            <FaEdit />
          </Button>
          <Button
            type='button'
            variant='primary'
            circle
            onClick={() => handleCompleted({ id, completed: !completed })}
          >
            <FaCheck />
          </Button>
          <Button
            type='button'
            variant='secondary'
            circle
            onClick={() => handleDelete(id)}
          >
            <FaTrash />
          </Button>
        </TodoControls>
      </TodoBlock>
      <CSSTransition in={edit} timeout={300} classNames='form' unmountOnExit>
        <Form
          submitText='Change todo'
          placeholder='Change todo...'
          defaultValue={text}
          onSubmit={handleSubmitChange}
          isFocused
        />
      </CSSTransition>
    </TodoWrapper>
  );
};

export default TodoItem;
