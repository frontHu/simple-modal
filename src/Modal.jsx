import React, { Component } from "react";
import PropTypes from 'prop-types';
import './modal.scss';


class Modal extends Component {
  constructor(props) {
    super(props)
  }

  //点击确认回调函数
  onOkClick(e) {
    e.stopPropagation()
    this.props.onOk && this.props.onOk()
    this.props.onClose()
  }

  //点击取消回调函数
  onCancelClick(e) {
    e.stopPropagation()
    this.props.onCancel && this.props.onCancel()
    this.props.onClose()
  }

  render() {
    const {
      title,
      children,
      className,
      okText,
      cancelText,
      maskClosable,
      type
    } = this.props;

    return (
      <div className={`modal-container ${ className }`} onClick={maskClosable ? this.props.onClose : ()=>{}}>
        <div className="modal-body">
          <div className={`modal-title ${ type }`}>{title}</div>
          <div className="modal-content">{ children }</div>
          <div className="modal-footer"> 
            <button className="ok-btn" onClick={ this.onOkClick.bind(this) }>{ okText }</button>
            <button className="cancel-btn" onClick={ this.onCancelClick.bind(this) }>{ cancelText }</button>
          </div>
        </div>
      </div>
    )
  }
}


Modal.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.string,
  maskClosable: PropTypes.bool,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  type: PropTypes.oneOf(['alert', 'confirm', 'error'])
}
Modal.defaultProps = {
  title: 'Basic Title',
  children: 'Basic content',
  className: '',
  maskClosable: true,
  onCancel: () => { },
  onOk: () => { },
  okText: 'OK',
  cancelText: 'Cancel',
  type: 'alert',
}

export default Modal;