import React from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import LoaderButton from './LoaderButtonComponent'
import './LoginComponent.scss'

const LoginComponent = ({
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
  handleLoginProcess
}) =>
  <div className="Login">
    <form onSubmit={handleLoginProcess}>
      <FormGroup controlId="username" bsSize="large">
        <ControlLabel>Email</ControlLabel>
        <FormControl
          autoFocus
          type="text"
          onChange={handleUsernameChange}
          value={username}
        />
      </FormGroup>
      <FormGroup controlId="password" bsSize="large">
        <ControlLabel>Password</ControlLabel>
        <FormControl
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
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
