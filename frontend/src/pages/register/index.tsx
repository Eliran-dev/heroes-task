import React, { useEffect, useState } from 'react'
import { styled } from '@stitches/react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registrationSubmit } from './registerSubmit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye, faSlash } from '@fortawesome/free-solid-svg-icons'

const RegistrationForm = styled('div', {
  margin: 'auto',
  width: '80%',
  height: 'auto',
  backgroundColor: 'SkyBlue',
  textAlign: 'center'
})

const Buttons = styled('div', {
  display: 'block'
})


const Register = () => {
  const [pass, setPass] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [showPass, setShowPass] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(true);
  const errorsArray = [
    { id: 1, error: "Must be longer than 8 characters and up to 16", testError: /^.{8,16}$/, isError: true },
    { id: 2, error: "Must contain at least one number", testError: /(?=.*\d).*$/, isError: true },
    { id: 3, error: "Must contain one capital letter", testError: /(?=.*[A-Z]).*$/, isError: true },
    { id: 4, error: "Must contain non-alphanumeric char (@$!%*#?&)", testError: /(?=.*[@$!%*#?&]).*$/, isError: true }
  ]
  const [errors, setErrors] = useState(errorsArray)

  useEffect(() => {
    const re = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[@$!%*#?&](?=.*{8, 10})).*$/;
    const containDigit = /(?=.*\d).*$/;
    let newState = [...errorsArray];
    let counter: number = 0;
    for (let i = 0; i < 4; i++) {

      if ((newState[i].testError)?.test(pass)) {
        newState[i].isError = false;
        counter++;
      }
      else {
        newState[i].isError = true;

      }
    }
    setError(!(counter === 4))

    console.log(newState)


    setErrors(newState);
    console.log(errors)


  }, [pass])
  return (
    <RegistrationForm>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type={showPass ? "text" : "password"} placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)}></Form.Control>
        <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} onClick={() => setShowPass(!showPass)} />
        {console.log("errorsArray ", errors)}
        {errors.filter(error => error.isError === true).map((error, i) => (
          <div
            key={i}
          >
            <Form.Text className="text-muted">
              {error.error}
            </Form.Text>
          </div>
        ))}
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
   <Form.Check type="checkbox" label="Check me out" />
 </Form.Group> */}
      <Button disabled={error} variant="primary" type="submit" onClick={() => registrationSubmit(email, pass)}>
        Submit
      </Button>
      <Buttons>

        <Button variant="secondary" onClick={() => window.location.replace('/login')}>
          Already registered? Log in
        </Button>
      </Buttons>

    </RegistrationForm>
  )
}

export default Register;