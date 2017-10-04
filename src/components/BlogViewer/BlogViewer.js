import React from 'react'
import Blog from 'containers/Blog'
import SearchField from 'containers/SearchField'
/**
 * This is the container for the blog view
 * @type {React component}
 */

const BlogViewer = () => (
  <div className="blog-viewer">
    <SearchField placeholder="Search..." />
    <Blog />
  </div>
)

export default BlogViewer
