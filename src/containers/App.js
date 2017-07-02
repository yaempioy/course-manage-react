import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './App.scss'

class App extends Component {
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
            <NavItem eventKey={1} href='#'>
              Link
            </NavItem>
            <NavItem eventKey={2} href='#'>
              Link
            </NavItem>
          </Nav>
        </Navbar>
        <div className='contentContainer'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
