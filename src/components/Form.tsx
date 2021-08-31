import React from 'react';
import styled from 'styled-components';
import { Button, Input } from './Elements';

interface FormProps {
  submitText: string;
}

interface FormHolderProps {
  sm?: boolean;
}

const FormBlock = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const FormHolder = styled.div<FormHolderProps>`
  flex-grow: 1;
  ${(props) =>
    props.sm
      ? {
          'flex-shrink': 0,
          'flex-grow': 0,
          'margin-left': props.theme.spacing[2],
        }
      : null};
`;

const Form: React.FC<FormProps> = ({submitText}) => {
  return (
    <FormBlock>
      <FormHolder>
        <Input placeholder='add todo...' />
      </FormHolder>
      <FormHolder sm>
        <Button type="submit" variant='primary'>{submitText}</Button>
      </FormHolder>
    </FormBlock>
  );
};

export default Form;
