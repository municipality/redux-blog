import React from 'react'
import Blog from 'containers/Blog'
import SearchField from 'containers/SearchField'
import Greeting from 'components/Greeting'

import './BlogViewer.css'
/**
 * This is the container for the blog view
 * @type {React component}
 */

const BlogViewer = () => (
  <div className="blog-viewer">
    <Greeting />
    <SearchField placeholder="Search blog title, entry, tag..." />
    <Blog />
  </div>
)

export default BlogViewer
