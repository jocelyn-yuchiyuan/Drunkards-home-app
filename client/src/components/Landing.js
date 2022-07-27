import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Landing (props) {
  return (
    <div className='middle-center'>
      <h1 className='landing logo'>Drunkard going home</h1>
      <ButtonGroup>
        <LinkContainer className='button' to='/sign-up'><Button>Sign up</Button></LinkContainer>
        <LinkContainer className='button'to='/log-in'><Button>Log in</Button></LinkContainer>
      </ButtonGroup>
    </div>
  );
}

export default Landing;