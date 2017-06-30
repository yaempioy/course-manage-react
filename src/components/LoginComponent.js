import React from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import './LoginComponent.scss'

const LoginComponent = ({}) =>
  <div className="Login">
    <form>
      <FormGroup controlId="username" bsSize="large">
        <ControlLabel>Email</ControlLabel>
        <FormControl autoFocus type="email" />
      </FormGroup>
      <FormGroup controlId="password" bsSize="large">
        <ControlLabel>Password</ControlLabel>
        <FormControl type="password" />
      </FormGroup>
    </form>
  </div>

export default LoginComponent
