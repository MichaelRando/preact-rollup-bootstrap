import React, { Component } from 'react'
import Modal from 'react-bootstrap/es/Modal'
import FormGroup from 'react-bootstrap/es/FormGroup'
import FormControl from 'react-bootstrap/es/FormControl'
import Button from 'react-bootstrap/es/Button'

export default class MyTestModal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      visible: false,
      accountData: {
        email: '',
        password: ''
      }
    }
    this.openDialog = function (e) {
      this.setState({visible: true})
    }.bind(this)

    this.closeDialog = function () {
      this.setState({visible: false})
    }.bind(this)

    this.handleChange = function (value, event) {
      let name = event.target.id
      this.setState((prevState, props) => {
        let deltaState = {accountData: Object.assign({}, prevState.accountData, {[name]: value})}
        return deltaState
      })
    }.bind(this)
  }

  render () {
    return (
      <div>
        <Button onClick={this.openDialog}>Test Modal</Button>
        <Modal
          id='fullPageLogin'
          show={this.state.visible}
          onHide={this.closeDialog}
        >
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <FormGroup>
            <FormControl
              id='email'
              placeholder='Email'
              type='email'
              block
              paddedBlock
              required
              value={this.state.accountData.email}
              onChange={this.handleChange}
            />
            <FormControl
              id='password'
              placeholder='Password'
              type='password'
              block
              paddedBlock
              required
              value={this.state.accountData.password}
              onChange={this.handleChange}
            />
            <Button onClick={this.signIn}>Log In</Button>
          </FormGroup>
        </Modal>
      </div>
    )
  }
}