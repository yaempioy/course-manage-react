import React from 'react'
import {Row, Col, FormControl} from 'react-bootstrap'
import {SingleDatePicker} from 'react-dates'
import moment from 'moment'

export default ({ title, data, handler, type = 'text', options = [], handlerDateFocusedChange, focused }) => <Row className='show-grid'>
  <Col xs={6} md={2}>
    <h5>{title}</h5>
  </Col>
  <Col xs={6} md={4}>
    {
      type === 'option' ? <FormControl componentClass='select' placeholder='gender' onChange={handler} >
        {
          options.map(option => (<option key={option.key} value={option.key}>{option.value}</option>))
        }
      </FormControl> : type === 'date' ? <SingleDatePicker
        date={moment(data)}
        focused={focused}
        onFocusChange={({focused}) => handlerDateFocusedChange(focused)}
        onDateChange={date => {
          console.log(date)
          handler(date)
        }}
        numberOfMonths={1}
        /> : <FormControl
          id='formControlsText'
          type='text'
          defaultValue={data}
          placeholder='Enter text'
          onChange={handler}
      />
    }
  </Col>
</Row>
