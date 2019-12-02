import React from 'react'

const BlogTemplate = ({ pageContext: { title, path, date } }) => (
  <div>
    <h1>{`${title} page`}</h1>
    <div>date: {date}</div>
  </div>
)

export default BlogTemplate