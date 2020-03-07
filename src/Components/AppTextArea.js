import React, { Component } from 'react'

class AppTextArea extends Component {
  // methods
  onChange (event) {
    console.log(event.target)
    if (this.props.onChange) this.props.onChange(event)
  }

  render () {
    const {
      id,
      label,
      rows,
      value
    } = this.props

    return (
      <div className='form-group'>
        <label
          htmlFor={id}
        >
          {label}
        </label>
        <textarea
          className='form-control'
          id={id}
          rows={rows}
          value={value}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}

export default AppTextArea
