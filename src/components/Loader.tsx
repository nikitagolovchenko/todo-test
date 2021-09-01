import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 5px 40px 40px;
  background-color: ${props => props.theme.colors.primary};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%);
`;

const LoaderInner = styled.div`
  display: inline-block;

  &:after {
    content: ' ';
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <LoaderInner/>
    </LoaderWrapper>
  );
};

export default Loader;
