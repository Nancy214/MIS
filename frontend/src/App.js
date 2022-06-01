import React from 'react'
import { Container } from 'react-bootstrap'
import Login from './components/Login';

const App = () => {
  return (
    
      <>
        <main className='py-3'>
          <Container>
            <Login/>
          </Container>
        </main>
      </>
    
  );
}

export default App;
