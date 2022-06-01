import React from 'react'
import { Container } from 'react-bootstrap'
import Login from './components/Login';
import {Route, BrowserRouter as Router}  from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <>
        <main className='py-3'>
          <Container>
            <Route path='/' component={Login} exact/>
          </Container>
        </main>
      </>

    </Router>
    
  );
}

export default App;
