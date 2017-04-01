import React from 'react'
import ReactDOM from 'react-dom'
import MyTestModal from './components/MyTestModal'
import 'inferno-devtools'
import MyTestDialog from './components/MyTestDialog'
import MyNextModal from './components/MyNextModal'

import './bootstrap.min.css'

class Main extends React.Component {
  render () {
    return (
      <div>
        <MyTestModal />
        <MyTestDialog />
        <MyNextModal />
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
)
