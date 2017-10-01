import React from 'react'
import PropTypes from 'prop-types'
const TextInput = ({ placeholder, searchFunc }) => (
  <div className="text-input">
    <input
      type="text"
      placeholder={placeholder}
      defaultValue=""
      onKeyPress={event => {
        //If user presses enter, fire search
        if (event.key === 'Enter') {
          searchFunc(event.target.value)
        }
      }}
    />
  </div>
)

TextInput.propTypes = {
  placeholder: PropTypes.string,
  searchFunc: PropTypes.func.isRequired
}

export default TextInput
