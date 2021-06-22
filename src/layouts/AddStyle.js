import React from 'react';
import styled from 'styled-components';

export default function AddStyle ({ children }) {
  return (
    <Container>
        { children }
    </Container>
  );
}

const Container = styled.div`
  margin: 10vw auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

