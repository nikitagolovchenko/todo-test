import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button, Input } from './Elements';
import {useForm} from 'react-hook-form';

interface FormProps {
  submitText: string;
  mb?: boolean;
  onSubmit: (value: string, ...rest: any) => any;
  isFocused?: boolean;
  defaultValue?: string;
  placeholder: string;
}

interface FormBlockProps {
  mb?: boolean;
}

interface FormHolderProps {
  sm?: boolean;
}

const FormBlock = styled.form<FormBlockProps>`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.mb ? '30px' : 0};

  &.form-enter {
    opacity: 0;
    transform: translateY(50px);
  }

  &.form-enter-done {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.3s;
  }

  &.form-exit {
    opacity: 1;
    transform: translateY(0);
  }

  &.form-exit-active {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.3s;
  }
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

const Form: React.FC<FormProps> = ({submitText, mb, onSubmit, isFocused, placeholder, defaultValue}) => {
  const { register, setValue, setFocus, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    mode: 'onChange'
  });

  useEffect(() => {
    isFocused && setFocus('input');
  }, [setFocus])

  const onSubmitHandler = () => {
    onSubmit(watch('input').trim());
    setValue('input', '');
  }

  return (
    <FormBlock mb={mb ? true : false} onSubmit={handleSubmit(onSubmitHandler)}>
      <FormHolder>
        <Input placeholder={placeholder} defaultValue={defaultValue} {...register('input', {required: true})} />
      </FormHolder>
      <FormHolder sm>
        <Button type="submit" variant='primary' disabled={!isValid}>{submitText}</Button>
      </FormHolder>
    </FormBlock>
  );
};

export default Form;
