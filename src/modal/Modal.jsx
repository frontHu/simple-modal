import React, { Component } from "react";
import PropTypes from 'prop-types';
import './modal.scss';


const propTypes  = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  titlePosition: PropTypes.oneOf(['left', 'center']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  btnPosition: PropTypes.oneOf(['left', 'center', 'right']),
}

const defaultProps = {
  title: 'Basic Title',
  titlePosition: 'center',
  width: '400px',
  children: 'Basic Content',
  wrapClassName: '',
  maskClosable: true,
  onOk: () => { },
  onCancel: () => { },
  okText: '确认',
  cancelText: '取消',
  btnPosition: 'center'
}

class Modal extends Component {
  constructor(props) {
    super(props)
  }

  //点击确认回调函数
  onOkClick(e) {
    e.stopPropagation()
    this.props.onOk && this.props.onOk()
  }

  //点击取消回调函数
  onCancelClick(e) {
    e.stopPropagation()
    this.props.onCancel && this.props.onCancel()
  }

  render() {
    const {
      title,
      titlePosition,
      width,
      children,
      wrapClassName,
      okText,
      cancelText,
      btnPosition
    } = this.props;
    
    return (
      <div className={`modal-container ${ wrapClassName }`}>
        <div className="modal-body" style={{width: `${width}`}}>
          <div className="modal-close" onClick={this.onCancelClick.bind(this)}>×</div>
          <div className={`modal-title modal-title-${ titlePosition }`}>{title}</div>
          <div className="modal-content">{ children }</div>
          <div className={`modal-footer modal-footer-${btnPosition}`}> 
            <button className="ok-btn" onClick={ this.onOkClick.bind(this) }>{ okText }</button>
            <button className="cancel-btn" onClick={ this.onCancelClick.bind(this) }>{ cancelText }</button>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = propTypes  
Modal.defaultProps = defaultProps

export default Modal;