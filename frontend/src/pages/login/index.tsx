import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { styled } from "@stitches/react";
import { loginSubmit } from './loginSubmit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye, faSlash } from '@fortawesome/free-solid-svg-icons'

const LoginForm = styled('div', {
  margin: 'auto',
  width: '50%',
  height: 'auto',
  backgroundColor: 'SkyBlue',
  textAlign: 'center'
})

const Login = () => {
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [showPass, setShowPass] = useState(false);

  return (
    <LoginForm>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type={showPass ? "text" : "password"} placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)}></Form.Control>
        <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} onClick={() => setShowPass(!showPass)} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
      <Button disabled={pass.length < 8 || !email} variant="primary" type="submit" onClick={() => loginSubmit(email, pass)}>
        Submit
      </Button>
      <Button variant="secondary" type="submit" onClick={() => window.location.replace('/register')}>
        Register
      </Button>


    </LoginForm>
  )
}

export default Login;