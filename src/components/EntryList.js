import React from 'react'
import PropTypes from 'prop-types'
import Entry from './Entry'

const EntryList = ({ entries }) => (
  <div>{entries.map((entry, index) => (
    <Entry key={index} {...entry} />
  ))}</div>
)

EntryList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      //May need id here in the future
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      img: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      isOpen: PropTypes.bool.isRequired
    }).isRequired
  )
}

export default EntryList
