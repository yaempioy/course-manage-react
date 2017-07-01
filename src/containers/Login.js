import React, { Component } from 'react'
import { connect } from 'react-redux'
// import LoaderButton from '../components/LoaderButton'
// import config from '../config.js'
import { initailAction } from '../actions/LoginAction'
import LoginComponent from '../components/LoginComponent'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      username: '',
      password: ''
    }
  }

  render() {
    return <LoginComponent />
  }
}

const mapStateToProps = state => {}
const mapDispatchToProps = { initailAction }

export default connect(mapStateToProps, mapDispatchToProps)(Login)
