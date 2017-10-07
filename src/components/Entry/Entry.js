import React from 'react'
import PropTypes from 'prop-types'
import Tag from 'containers/Tag'
import './Entry.css'

//List of props used in Entry component
const Entry = ({ title, text, img, tags, isOpen }) => (
  <div className="entry">
    <p>{title}</p>
    {isOpen && (
      <div>
        {img && <img className="entry-image" alt="brianslaundry" src={img} />}
        <div className="entry-text">{text}</div>
        <div className="entry-tags">
          {tags.map((tag, index) => <Tag key={tag} text={tag} />)}
        </div>
      </div>
    )}
  </div>
)

Entry.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  isOpen: PropTypes.bool.isRequired
}

export default Entry
