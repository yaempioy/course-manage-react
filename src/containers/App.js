import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'
import {getAuthenticationProfile} from '../actions/Auth.action'
import { logout } from '../cores/modules/Auth.module'
import './App.scss'

class App extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentWillMount () {
    this.props.getAuthenticationProfile()
  }
  handleLogout = () => {
    logout()
    this.context.router.push('/login')
  }

  render () {
    return (
      <div className='coreContainer'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>Course Management</Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} componentClass={Link} href='/' to='/'>Home</NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title='Setting' id='basic-nav-dropdown'>
              <MenuItem componentClass={Link} href='/profile' to='/profile' eventKey={3.1}>Profile</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.2} onClick={() => this.handleLogout()}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <div className='contentContainer'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({authentication: state.authentication.authentication, user: state.authentication.user})
const mapDispatchToProps = {getAuthenticationProfile}

export default connect(mapStateToProps, mapDispatchToProps)(App)
