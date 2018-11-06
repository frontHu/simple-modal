import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'


class ModalBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen || true
    }
  }

  componentDidMount() {
    if(this.state.isOpen === true) {
      this.renderPortal(this.props)
    }
  }

  componentWillReceiveProps(nextProps) {
    if("isOpen" in nextProps) {
      this.setState({isOpen: nextProps.isOpen}, () => {
        if(this.state.isOpen) {
          this.renderPortal(nextProps)
        }
      })
    }
  }

  componentWillUnmount() {
    this.onClose();
  }

  renderPortal(props) {
    const doc = window.document;
    this.node = doc.createElement('div');
    doc.body.appendChild(this.node);
    ReactDOM.render(
      <Modal {...props} onClose={this.onClose.bind(this)} />, 
      this.node
    );
  }

  onClose() {
    ReactDOM.unmountComponentAtNode(this.node);
    window.document.body.removeChild(this.node);
  }

  render() {
    return null
  }
}

export default ModalBox;