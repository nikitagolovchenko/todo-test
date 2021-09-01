import React from 'react';
import styled from 'styled-components';
import { Paragraph } from './Elements';

interface NotificationProps {
  text: string;
  status: 'success' | 'error';
}

interface NotificationInnerProps {
  status: 'success' | 'error';
}

const NotificationBox = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 30px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NotificationInner = styled.div<NotificationInnerProps>`
  min-width: 250px;
  padding: ${props => props.theme.spacing[1]} ${props => props.theme.spacing[2]};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.status === 'success' ? props.theme.colors.success : props.status === 'error' ? props.theme.colors.error : props.theme.colors.gray};
  text-align: center;
  color: ${props => props.theme.colors.light};
  opacity: 0;
  visibility: hidden;
  transform: translateY(100px);
  animation: show 5s ${props => props.theme.transition.easing} forwards;

  @keyframes show {
    0% {
      opacity: 1;
      visibility: visible;
      transform: translateY(100px);
    }
    25% {
      transform: translateY(0);
    }
    75% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      visibility: hidden;
      transform: translateY(0);
    }
  }
`;

const Notification: React.FC<NotificationProps> = ({text, status}) => {
  return (
    <NotificationBox >
      <NotificationInner status={status}>
      <Paragraph>{text}</Paragraph>
      </NotificationInner>
    </NotificationBox>
  )
}

export default Notification
