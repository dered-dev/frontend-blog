import React, { Component } from 'react'

class AppInput extends Component {
  // methods
  onChange (event) {
    if (this.props.onChange) this.props.onChange(event)
  }

  render () {
    const {
      id,
      type,
      label,
      ariaDescribedBy,
      children,
      value,
      placeholder
    } = this.props

    return (
      <div className='form-group'>
        <label
          htmlFor={id}
        >
          {label}
        </label>
        <input
          type={type}
          className='form-control'
          id={id}
          aria-describedby={ariaDescribedBy}
          value={value}
          placeholder={placeholder}
          onChange={this.onChange.bind(this)}
        />
        {children}
      </div>
    )
  }
}

export default AppInput
