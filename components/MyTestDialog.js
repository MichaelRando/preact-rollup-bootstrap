import React from 'react'
import Dialog from 'rc-dialog/lib/DialogWrap'
import 'rc-dialog/assets/index.css'

export default class MyTestDialog extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      visible: false,

      accountData: {
        email: '',
        password: ''
      }
    }
  }

  getInitialState () {
    return {
      visible: false,
      destroyOnClose: false
    }
  }

  openDialog = (e) => {
    this.setState({visible: true})
  }

  closeDialog = () => {
    this.setState({visible: false})
  }

  handleChange = (value, event) => {
    let name = event.target.id
    this.setState((prevState, props) => {
      let deltaState = {accountData: Object.assign({}, prevState.accountData, {[name]: value})}
      return deltaState
    })
  }

  signIn = () => {}

  render () {
    let dialog
    if (this.state.visible) {
      dialog = (
        <Dialog
          id='fullPageLogin'
          title='Log In'
          visible={this.state.visible}
          onClose={this.closeDialog}
          animation='zoom'
          maskAnimation='fade'
        >
          <button onClick={this.signIn}>Log In</button>
        </Dialog>
      )
    }
    return (
      <div>
        <button onClick={this.openDialog}>Test Dialog</button>
        {dialog}
      </div>
    )
  }
}
