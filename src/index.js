import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';


class Modalbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen || false
    }
    this.node = null;
  }

  componentDidMount() {
    if(this.state.isOpen === true) {
      this.renderPortal(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if("isOpen" in nextProps) {
      this.setState({
        isOpen: nextProps.isOpen
      }, () => {
        if(this.state.isOpen) {
          this.renderPortal(nextProps);
        }else {
          this.onClose();
        }
      })
    }
    
  }

  componentWillUnmount() {
    this.onClose();
  }

  renderPortal(props) {
    if(!this.node) {
      this.node = window.document.createElement('div');
      window.document.body.appendChild(this.node);
    }
    
    ReactDOM.render(
      <Modal {...props} onClose={this.onClose.bind(this)}>{props.children}</Modal>,  
      this.node 
    );
  }

  onClose() {
    if(this.node) {
      ReactDOM.unmountComponentAtNode(this.node);
      window.document.body.removeChild(this.node);
      this.node = null;
    }
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Modalbox;