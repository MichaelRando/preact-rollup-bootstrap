import React from 'react'
import Dialog from 'rc-dialog/lib/DialogWrap'
import 'rc-dialog/assets/index.css'

export default class MyTestDialog extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      visible: false,
      destroyOnClose: false,
      accountData: {
        email: '',
        password: ''
      }
    }
  }

  openDialog = (e) => {
    this.setState({visible: true})
    console.log('dialog is open')
  }

  closeDialog = () => {
    this.setState({visible: false})
    console.log('dialog is closed')
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
    return (
      <div>
        <button onClick={this.openDialog}>Test Dialog</button>
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
      </div>
    )
  }
}
