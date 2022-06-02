import React from 'react'
import { Container } from 'react-bootstrap'
import Login from './components/Login';
import {Route, BrowserRouter as Router, Switch}  from 'react-router-dom'
import User from './components/User';
import Admin from './components/Admin';

const App = () => {
  return (
    <Router>
      <>
        <main className='py-3'>
          <Container>
            <Switch>

            <Route path='/' component={Login} exact/>
            <Route path='/user/:id' component={User}/>
            <Route path='/admin/:id' component={Admin}/>
            </Switch>
          </Container>
        </main>
      </>

    </Router>
    
  );
}

export default App;
