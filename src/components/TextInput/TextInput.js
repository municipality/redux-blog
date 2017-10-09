import React from 'react'
import PropTypes from 'prop-types'
import './TextInput.css'

/**
 * TextInput class for SearchField functionality
 * @prop placeholder
 * @prop searchFunc
 * @state text: current search term
 */
class TextInput extends React.PureComponent {
  constructor(props) {
    super()
    // text is either searchTerm that is passed in
    // or ''
    this.state = {
      text: props.searchTerm || ''
    }
  }

  // USE THIS LIFECYCLE HOOK TO UPDATE state WHEN
  // TAG IS CLICKED AND mapStateToProps ON SearchField
  // IS CALLED
  // Props are updated so call this
  componentWillReceiveProps(nextProps) {
    this.setState({
      text: nextProps.searchTerm
    })
  }

  render() {
    return (
      <div className="text-input">
        <input
          type="text"
          placeholder={this.props.placeholder}
          // Have to set value and use onChange because
          // this value is based on state and can be
          // changed by code
          value={this.state.text}
          onChange={event => {
            this.setState({
              text: event.target.value
            })
          }}
          onKeyPress={event => {
            // If user presses enter, fire search
            if (event.key === 'Enter') {
              this.props.searchFunc(event.target.value)
            }
          }}
        />
      </div>
    )
  }
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  searchFunc: PropTypes.func.isRequired,
  searchTerm: PropTypes.string
}

export default TextInput
