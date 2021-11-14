import React from 'react';
import { Container } from '@material-ui/core';

function MainLayout({ children }) {
  return (
    <Container  maxWidth={'md'}>
      {children}
    </Container>
  );
}

export default MainLayout;
