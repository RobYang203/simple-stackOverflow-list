import React from 'react';
import { Container } from '@material-ui/core';
import TopBar from './components/TopBar';

function MainLayout({ children }) {
  return <Container maxWidth={false}>{children}</Container>;
}

export default MainLayout;
