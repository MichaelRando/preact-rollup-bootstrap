import React, { Component } from 'react'
import Modal from 'react-modal/lib/components/Modal'
import Button from 'react-bootstrap/es/Button'

export default class MyNextModal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      modalIsOpen: false,
      accountData: {
        email: '',
        password: ''
      }
    }
    this.openDialog = function (e) {
      this.setState({modalIsOpen: true})
    }.bind(this)

    this.closeDialog = function () {
      this.setState({modalIsOpen: false})
    }.bind(this)

    this.handleChange = function (value, event) {
      let name = event.target.id
      this.setState((prevState, props) => {
        let deltaState = {accountData: Object.assign({}, prevState.accountData, {[name]: value})}
        return deltaState
      })
    }.bind(this)
  }

  signIn = () => {}

  render () {
    return (
      <div>
        <Button onClick={this.openDialog}>Test Modal</Button>
        <Modal
          id='fullPageLogin'
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeDialog}
          contentLabel='Example Modal'>
          <Button onClick={this.signIn}>Log In</Button>
        </Modal>
      </div>
    )
  }
}