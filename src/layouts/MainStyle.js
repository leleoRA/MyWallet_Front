import React from 'react';
import styled from 'styled-components';

export default function MainStyle ({ children }) {
  return (
    <Container>
      <Title>
        <h1>MyWallet</h1>
      </Title>
      <Box>
        { children }
      </Box>
    </Container>
  );
}

const Container = styled.div`
  margin: 30vw auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;

  h1{
    font-size: 32px;
    font-family: 'Saira Stencil One', cursive;
    color: #FFF;
  }
`;

const Box = styled.div`
  border-radius: 20px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, .05);
  width: 400px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;