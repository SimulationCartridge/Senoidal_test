import React, { useEffect, useState } from 'react'
import { client } from '../../client'
import { Link } from 'react-router-dom';

const BlogListArchive = () => {

const [blogPosts, setBlogPosts] = useState([])



useEffect(() => {
    client.getEntries()
      .then((response) => {
        console.log(response);
        setBlogPosts(response.items);
      })
      .catch(console.error);
  }, []); 
  return (
    <section className='fondo'>
        <div>
            {blogPosts.map((post) => (
              <div key={post.sys.id}
              className='post-archive'>
                <div  className='image-container-archive'>
                  <img className="post-image-archive"
                  src={post.fields.images.fields.file.url} 
                  alt={post.fields.titles} 
                   />
                  <Link 
                  className='overlay-archive'
                  to={`/archivo/${post.sys.id}`}>
                    Leer más
                    
                    <h2
                  className='overlay-text-archive'>
                    {post.fields.title}
                    </h2>
                  </Link>

                  <p className='titles-archive'> 
                    <a>
                      {post.fields.titles}</a> 
                  </p>
                </div> 
              </div>
            ))}
        </div>
        </section>
  )
}

export default BlogListArchive;