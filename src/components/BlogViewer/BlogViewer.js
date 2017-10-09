import React from 'react'
import Blog from 'containers/Blog'
import BlogHeader from 'components/BlogHeader'

import './BlogViewer.css'
/**
 * This is the container for the blog view
 * @type {React component}
 */

const BlogViewer = () => (
  <div className="blog-viewer">
    <BlogHeader />
    <Blog />
  </div>
)

export default BlogViewer
