import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {Link} from 'react-router'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import GridRow from '../components/GridRow.component'
import GridEditRow from '../components/GridEditRow.component'
import {updateProfile, updateBirthDate} from '../actions/User.action'
import moment from 'moment'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editIng: false,
      birthdayFocused: false
    }
  }
  handleFirstnameChange = (e) => { this.setState({firstname: e.target.value}) }
  handleLastnameChange = (e) => { this.setState({lastname: e.target.value}) }
  handleNicknameChange = (e) => { this.setState({nickname: e.target.value}) }
  handleGenderChange = (e) => { this.setState({gender: e.target.value}) }
  handleBirthdayChange = (date) => { this.setState({birthday: date}) }
  handleBirthdayFocusedChange = (focused) => { this.setState({birthdayFocused: focused}) }
  renderViewMode = (title, data, type = 'text') => (<GridRow title={title} data={data} type={type} />)
  renderEditMode = (title, data, handler, type = 'text', options = [], handleFocusedChange, focused) => (<GridEditRow title={title} data={data} handler={handler} type={type} options={options} handlerDateFocusedChange={handleFocusedChange} focused={focused} />)
  submitEditProfileProcess = () => {
    const {user} = this.props
    const {firstname, lastname, nickname, gender, birthday} = this.state
    this.props.updateProfile(user._id, {firstname, lastname, nickname, gender, birthday: moment(birthday).format()})
    /** Should set after update profile success */
    this.setState({editIng: !this.state.editIng})
  }
  submitDate = () => {
    const {birthDate} = this.state
    this.props.updateBirthDate(moment(birthDate).format())
  }
  render () {
    const { user } = this.props
    const { editIng, birthdayFocused, birthday } = this.state
    return (<div className='container'>
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} md={8}><h4>Profile</h4></Col>
          { !editIng ? <Col xs={6} md={4}><Button
            onClick={() => this.setState({
              firstname: user.firstname,
              lastname: user.lastname,
              gender: user.gender,
              birthday: user.birthday,
              editIng: !editIng})
            }>Edit</Button></Col> : null}
        </Row>
        { editIng ? this.renderEditMode('First name', user.firstname, this.handleFirstnameChange) : this.renderViewMode('First name', user.firstname) }
        { editIng ? this.renderEditMode('Last name', user.lastname, this.handleLastnameChange) : this.renderViewMode('Last name', user.lastname) }
        { editIng ? this.renderEditMode('Nickname', user.nickname, this.handleNicknameChange) : this.renderViewMode('Nickname', user.nickname) }
        { editIng ? this.renderEditMode('Gender', user.gender, this.handleGenderChange, 'option', [{value: 'MALE', key: 'M'}, {value: 'WOMEN', key: 'W'}]) : this.renderViewMode('Gender', user.gender) }
        { editIng ? this.renderEditMode('Birthday', birthday, this.handleBirthdayChange, 'date', [], this.handleBirthdayFocusedChange, birthdayFocused) : this.renderViewMode('Birthday', user.birthday, 'date') }
      </Grid>
      <hr />
      { editIng ? <Grid>
        <Row className='show-grid'>
          <Col xs={4} md={1}><Button onClick={this.submitEditProfileProcess}>Save</Button></Col>
          <Col xs={4} md={1}><Button onClick={() => this.setState({editIng: !editIng})}>Cancel</Button></Col>
        </Row>
      </Grid> : null}
    </div>)
  }
}

const mapStateToProps = state => ({ user: state.authentication.user })
const mapDispatchToProps = {updateProfile, updateBirthDate}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
