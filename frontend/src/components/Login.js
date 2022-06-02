import React, { useState, useEffect} from 'react'
import { Form, Button} from 'react-bootstrap'
import FormContainer from './FormContainer'
import axios from 'axios'
import {io} from 'socket.io-client'
import User from './User'
import Admin from './Admin'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ip, setIp] = useState('')
  const [user, setUser] = useState('')
  const [socket, setSocket] = useState(null)

  useEffect(()=>{
        setSocket(io("http://localhost:5001"))
  },[])
  useEffect(()=>{
      socket?.emit("newEmployee", user)
  },[socket, user])
  
  const submitHandler = async(e) => {
    e.preventDefault()
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/users/login',
      { email, password, ip },
      config
    )
    //console.log(data)
    setUser({
      email: email,
      ip: ip,
      isAdmin: data.isAdmin,
      lastLogin: data.lastLogin
    })
    //localStorage.setItem('userInfo', JSON.stringify(data))

    
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
      
        <Form.Group controlId='password'>
          <Form.Label>Password:{'   '}</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
      
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
    {user.isAdmin === false ? <User socket={socket} user={user}/> : <></>}
    {user.isAdmin === true ? <Admin socket={socket} user={user}/> : <></>}
    </FormContainer>
    
  )
}

export default Login
