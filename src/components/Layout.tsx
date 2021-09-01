import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 550px;
  padding: 0 25px;
  width: 100%;
  margin: 0 auto;
`;

const Layout: React.FC = ({children}) => {
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  )
}

export default Layout
