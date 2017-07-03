import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router'
import {getAuthenticationProfile} from '../actions/Auth.action'
import './App.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    this.props.getAuthenticationProfile()
  }

  render () {
    return (
      <div className='coreContainer'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'>React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem >Profile</NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title='Setting' id='basic-nav-dropdown'>
              <MenuItem componentClass={Link} href='/profile' to='/profile' eventKey={3.1}>Profile</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.2}>Logout</MenuItem>
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
