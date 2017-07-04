import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import GridEditRow from '../components/GridEditRow.component'
import moment from 'moment'
import { timeFromInt } from 'time-number'
import {createCourseProcess} from '../actions/Course.action'

const initialCourseStete = {
  subject: '',
  fullname: '',
  description: '',
  date: moment(),
  start: 0,
  end: 0,
  studens: 0
}

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      creating: false,
      courseDateFocused: false,
      course: initialCourseStete
    }
  }

  handleFullNameChange = (e) => { this.setState({course: Object.assign(this.state.course, {fullname: e.target.value})}) }
  handleCourseSubjectChange = (e) => { this.setState({course: Object.assign(this.state.course, {subject: e.target.value})}) }
  handleDescriptionChange = (e) => { this.setState({course: Object.assign(this.state.course, {description: e.target.value})}) }
  handleCourseDateFocusedChange = (focused) => { this.setState({courseDateFocused: focused}) }
  handleCourseDateChange = (date) => { this.setState({course: Object.assign(this.state.course, {date})}) }
  handleCourseStartTimeChange = (time) => {
    console.log(timeFromInt(time))
    this.setState({course: Object.assign(this.state.course, {start: time})})
  }
  handleCourseEndTimeChange = (time) => { this.setState({course: Object.assign(this.state.course, {end: time})}) }
  handleCourseStudenChange = (e) => { this.setState({course: Object.assign(this.state.course, {studens: e.target.value})}) }

  submitCrateCourseProcess = () => {
    this.props.createCourseProcess(Object.assign(this.state.course, {date: moment(this.state.course.date).format(), instructor: this.props.user._id}))
    this.setState({creating: !this.state.creating})
  }

  renderCreateCourse = () => {
    const {course, courseDateFocused} = this.state
    return (
      <Grid>
        <GridEditRow title={'Full name'} data={course.fullname} handler={this.handleFullNameChange} type={'text'} />
        <GridEditRow title={'Subject'} data={course.subject} handler={this.handleCourseSubjectChange} type={'text'} />
        <GridEditRow title={'Description'} data={course.description} handler={this.handleDescriptionChange} type={'text'} />
        <GridEditRow title={'Date'} data={course.date} handler={this.handleCourseDateChange} type={'date'} handlerDateFocusedChange={this.handleCourseDateFocusedChange} focused={courseDateFocused} />
        <GridEditRow title={'Start'} data={course.start} handler={this.handleCourseStartTimeChange} type={'time'} />
        <GridEditRow title={'End'} data={course.end} handler={this.handleCourseEndTimeChange} type={'time'} />
        <GridEditRow title={'Students'} data={course.studens} handler={this.handleCourseStudenChange} type={'number'} />
      </Grid>
    )
  }
  renderCreateCourseActions = () => (
    <Grid>
      <Row className='show-grid'>
        <Col xs={4} md={1}><Button onClick={this.submitCrateCourseProcess}>Save</Button></Col>
        <Col xs={4} md={1}><Button onClick={() => this.setState({creating: !this.state.creating, course: Object.assign({}, initialCourseStete)})}>Cancel</Button></Col>
      </Row>
    </Grid>
  )

  render () {
    const {creating} = this.state
    return (
      <div className='container'>
        <Grid>
          <Row className='show-grid'>
            <Col xs={12} md={8}><h4>Course</h4></Col>
            <Col xs={6} md={4}><Button onClick={() => this.setState({creating: !creating, course: Object.assign({}, initialCourseStete)})}>Create</Button></Col>
          </Row>
        </Grid>
        <hr />
        { creating ? this.renderCreateCourse() : null }
        { creating ? <hr /> : null}
        { creating ? this.renderCreateCourseActions() : null }
      </div>
    )
  }
}
const mapStateToProps = state => ({ user: state.authentication.user })
const mapDispatchToProps = {createCourseProcess}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
