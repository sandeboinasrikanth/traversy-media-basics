import React from 'react';
import PropTypes from 'prop-types'

function Button({color, text , onClick}) {
  return <button onClick={onClick}  style={{background:color}} className='btn'>
        {text}
    </button>
}

Button.defaultProps={
    color:'steelblue',
}

Button.defaultProps={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
}

export default Button
