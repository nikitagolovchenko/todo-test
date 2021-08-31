import React from 'react';
import styled from 'styled-components';
import { Button, Paragraph } from './Elements';
import { FaCheck, FaEdit } from 'react-icons/fa';
import Form from './Form';

const TodoWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.spacing[1]};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TodoBlock = styled.div`
  margin-bottom: ${(props) => props.theme.spacing[1]};
  padding: ${(props) => props.theme.spacing[1]};
  padding-left: ${(props) => props.theme.spacing[2]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: ${(props) => props.theme.borderRadius};

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

const TodoItem: React.FC<Todo> = ({ id, title, text, completed }) => {
  return (
    <TodoWrapper>
      <TodoBlock>
        <TodoText>
          <Paragraph>text</Paragraph>
        </TodoText>
        <TodoControls>
          <Button type='button' variant='secondary' circle>
            <FaEdit />
          </Button>
          <Button type='button' variant='primary' circle>
            <FaCheck />
          </Button>
        </TodoControls>
      </TodoBlock>
      <Form submitText='Change todo'/>
    </TodoWrapper>
  );
};

export default TodoItem;
