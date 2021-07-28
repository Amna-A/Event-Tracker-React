// import React from 'react'

//impt using extention ES7
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
    // const onClick = () => {
    //     console.log('clicked')
    // }
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname==='/' && <Button 
            onClick={onAdd} 
            color={showAdd ? 'red' :'green'} 
            text={showAdd ? 'close': 'Add'}
            />}
           
        </header>
    )
}
Header.defaultProps ={
    title: "Task Tracker",
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
//css in js
// <h1 style={headingStyle}>{title}</h1>
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }
export default Header