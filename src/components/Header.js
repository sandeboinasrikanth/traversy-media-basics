import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title,onAdd, showAddTask}) => {
    // const onClick=()=>{
    //     console.log('Click')
    // }
  return (
    <header className='header'>
        {/* <p>Props Passing: {props.title}</p> */}
        <h1>{title}</h1>
        <Button color={showAddTask ? "red":"green"} text={showAddTask? "Close":"Add"} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps={
    title:"Task Tracker",
}

Header.propTypes={
    title:PropTypes.string.isRequired,
}

//css in js
// const headingStyle={
//     color:"red",
//     backgroundColor:"black",
//     textAlign:"center",
// }

export default Header