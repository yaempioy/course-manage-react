import React from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import LoaderButton from './LoaderButtonComponent'
import './LoginComponent.css'

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
      <LoaderButton
        block
        bsSize="large"
        // disabled={!this.validateForm()}
        type="submit"
        // isLoading={this.state.isLoading}
        text="Login"
        loadingText="Logging in…"
      />
    </form>
  </div>

export default LoginComponent
