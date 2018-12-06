import React from 'react'

import ModalBox from './modal'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true
    }
  }

  onCancel() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({isOpen: true})}}>click me</button>
        <ModalBox
          isOpen={true}
        ></ModalBox>
      </div>
    )
  }
} 