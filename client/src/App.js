import React from 'react';
import { Container, Navbar } from 'react-bootstrap'; // new
import { LinkContainer } from 'react-router-bootstrap'; // new
import { Outlet } from 'react-router-dom';

import './App.css';

// changed
function App () {
  return (
    <>
      <Navbar bg='light' expand='lg' variant='light'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='logo'>Home</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse />
        </Container>
      </Navbar>
      <Container className='pt-3'>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
