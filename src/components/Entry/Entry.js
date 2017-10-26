import React from 'react'
import PropTypes from 'prop-types'
import Tag from 'containers/Tag'
import './Entry.css'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
//List of props used in Entry component
const Entry = ({ title, text, img, tags, isOpen, date }) => {
  const dateObj = new Date(date)
  const month = months[dateObj.getMonth()]

  let dateString = `${dateObj.getDate()} ${month} ${dateObj.getFullYear()}`
  return (
    <div className="entry">
      <div className="entry-header">
        <div className="entry-title">{title.toUpperCase()}</div>
        <div className="entry-date">{dateString}</div>
      </div>
      {isOpen && (
        <div>
          {img && (
            <div
              className="entry-image"
              alt="brianslaundry"
              style={{
                backgroundImage: `url(${img})`
              }}
            />
          )}
          <div className="entry-text">{text}</div>
          <div className="entry-tags">
            {tags.map((tag, index) => <Tag key={tag} text={tag} />)}
          </div>
        </div>
      )}
    </div>
  )
}

Entry.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  isOpen: PropTypes.bool.isRequired
}

export default Entry
