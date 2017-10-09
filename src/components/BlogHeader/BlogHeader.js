import React from 'react'
import SearchField from 'containers/SearchField'

import './BlogHeader.css'

/**
 * BlogHeader is the container for fixed element
 * of the header for the blog
 */
const BlogHeader = () => (
  <div className="blog-header">
    <SearchField placeholder="Search blog title, entry, tag..." />
  </div>
)

export default BlogHeader
