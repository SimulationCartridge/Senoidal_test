import React, { useEffect, useState } from 'react'
import { client } from '../../client'
import { Link } from 'react-router-dom';

const BlogList = () => {

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
    <div>

<div id="layout" className="pure-g">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <h1 className="content-subhead">Web Dev Blog</h1>

            {blogPosts.map((post) => (
              <section className="post" key={post.sys.id}>
                <header className="post-header">
                  <img src={post.fields.images.fields.file.url} title="" alt={post.fields.titles} width="578" height="291" />
                  <h2 className="post-title pt-3">{post.fields.title}</h2>
                  <p className="post-meta">
                    By <a href="https://thecodeangle.com/" className="post-author">{post.fields.titles}</a> Date <span></span>

                  </p>
                </header>
                <div className="post-description">
                  <p>{post.fields.blogSummary}
                  </p>
                  <Link
                  to={`/archivo/${post.sys.id}`}
                    className="button button1">
                    Read More
                  </Link>
                </div>
              </section>
            ))}
          </div>


          <div className="footer">
            <div className="pure-menu pure-menu-horizontal">
              <div className="pure-menu-item">
                <a href="http://twitter.com/thecodeangle" className="pure-menu-link">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BlogList