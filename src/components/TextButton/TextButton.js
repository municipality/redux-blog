import React from 'react'
import PropTypes from 'prop-types'

/**
 * TextButton that takes text and onClick
 * This TextButton's onClick passes in its text as
 * an argument
 * @param {string} text
 * @param {function} onClick
 */
const TextButton = ({ text, onClick }) => (
  <div className="text-button">
    <input
      type="button"
      // NOTICE HERE
      onClick={() => {
        onClick(text)
      }}
      value={text}
    />
  </div>
)

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default TextButton
