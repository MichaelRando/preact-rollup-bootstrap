import React from 'react'
import ReactDOM from 'react-dom'
import MyTestModal from './components/MyTestModal'
import 'inferno-devtools'
import './bootstrap.min.css'

class Main extends React.Component {
  render () {
    return (
      <div>
        <MyTestModal />
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
)
