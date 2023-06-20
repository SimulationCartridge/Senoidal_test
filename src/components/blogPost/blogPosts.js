import React from 'react';
import BlogPost from './blogpost';




const BlogPosts = ({BlogPosts}) => {
  return (
    <div className='post'>
        {BlogPosts.map((posts, index) => <BlogPost posts={posts} key={index}/>)}
    </div>
  )
}

export default BlogPosts;