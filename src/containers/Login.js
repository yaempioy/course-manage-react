import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import { loginProcess } from '../actions/LoginAction'
import LoginComponent from '../components/LoginComponent'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      username: '',
      password: ''
    }
  }

  componentWillReceiveProps (nextProps) {}

  handleUsernameChange = e => {
    this.setState({ username: e.target.value })
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value })
  }

  handleLoginProcess = e => {
    e.preventDefault()
    const { username, password } = this.state
    this.props.loginProcess(username, password)
  }

  render () {
    const { username, password } = this.state
    return (
      <LoginComponent
        handleUsernameChange={this.handleUsernameChange}
        handlePasswordChange={this.handlePasswordChange}
        handleLoginProcess={this.handleLoginProcess}
        username={username}
        password={password}
      />
    )
  }
}

const mapStateToProps = state => ({ user: state.authentication.user })
const mapDispatchToProps = { loginProcess }

export default connect(mapStateToProps, mapDispatchToProps)(Login)
