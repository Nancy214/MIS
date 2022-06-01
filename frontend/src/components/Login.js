import React, { useState} from 'react'
import { Form, Button} from 'react-bootstrap'
import FormContainer from './FormContainer'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ip, setIp] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()
    console.log("hello")
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address:{'   '}</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br/>
        <Form.Group controlId='password'>
          <Form.Label>Password:{'   '}</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br/>
        <Form.Group controlId='ip'>
          <Form.Label>IP Address:{'   '}</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter IP Address'
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

    
    </FormContainer>
  )
}

export default Login
