import React from 'react'
import PropTypes from 'prop-types'
const footer = ({ message,children}) => {
    console.log(message)
  return (
    <div>
        <hr />
            <h1>{ message}</h1>
            <h2> {children} </h2>
    </div>
  )
}
  footer.propTypes = {
    message: PropTypes.string
  };
  footer.defaultProps = {
    message:"This is a default props"
  }
    
export default footer