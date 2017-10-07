import React from 'react'
import './SocialMediaIcons.css'

const icons = [
  {
    name: 'facebook',
    link: 'https://facebook.com/municipality'
  },
  {
    name: 'instagram',
    link: 'https://instagram.com/brianslaundry'
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/brianslaundry'
  },
  {
    name: 'github',
    link: 'https://github.com/municipality'
  },
  {
    name: 'linkedin',
    link: 'https://linkedin.com/in/bleee'
  }
]

const SocialMediaIcons = () => (
  <div className="social-media-icons">
    {icons.map(media => (
      <a
        target="_blank"
        href={media.link}
        key={media.name}
        className="social-media-icon"
      >
        <div className={'icon-' + media.name} />
      </a>
    ))}
  </div>
)

export default SocialMediaIcons
