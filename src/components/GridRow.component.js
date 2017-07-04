import React from 'react'
import {Row, Col} from 'react-bootstrap'
import moment from 'moment'

export default ({title, data, type}) => <Row className='show-grid'>
  <Col xs={6} md={2}>
    <h5>{title}</h5>
  </Col>
  {
    type === 'text' ? <Col xs={6} md={4}><h5>{data}</h5></Col> : type === 'date' ? <Col xs={6} md={4}><h5>{moment(data).format('YYYY-MM-DD')}</h5></Col> : <Col xs={6} md={4}><h5>{data}</h5></Col>
  }
</Row>
