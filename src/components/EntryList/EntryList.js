import React from 'react'
import PropTypes from 'prop-types'
import Entry from 'components/Entry'

const EntryList = ({ entries }) => (
  <div className="entry-list">
    {entries.map(entry => <Entry key={entry.title} {...entry} />)}
  </div>
)

EntryList.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      //May need id here in the future
      title: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      img: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      isOpen: PropTypes.bool.isRequired
    }).isRequired
  )
}

export default EntryList
