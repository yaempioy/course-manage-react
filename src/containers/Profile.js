import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className='container'>
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        </Row>

        <Row className='show-grid'>
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
          <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
        </Row>

        <Row className='show-grid'>
          <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
        </Row>

        <Row className='show-grid'>
          <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
          <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
        </Row>
      </Grid>
    </div>)
  }
}

const mapStateToProps = state => ({ user: state.authentication.user })
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
