import React, { useEffect, useState } from 'react';
import { client } from '../../client';
import { Link, useParams } from 'react-router-dom';

const BlogDetails = () => {
  const [singleBlogPost, setSingleBlogPost] = useState([]);
  let { id } = useParams();


  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setSingleBlogPost(entries)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById()
  }, [id])

  return (
    <div>

<div id="layout" className="pure-g">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <h1 className="content-subhead">Web Dev Blog</h1>

              <section className="post" >
                <header className="post-header">
                  <img src={singleBlogPost?.fields?.images?.fields?.file?.url} title="" alt={singleBlogPost?.fields?.titles} width="578" height="291" />
                  <h2 className="post-title pt-3">{singleBlogPost?.fields?.titles}</h2>
                  <p className="post-meta">
                    By <a href="https://thecodeangle.com/" className="post-author">{singleBlogPost?.fields?.titles}</a> Date <span></span>

                  </p>
                </header>
                <div className="post-description">
                  <p>{singleBlogPost?.fields?.content}
                  </p>
                  <Link
                  to={`/archivo/${singleBlogPost?.sys?.id}`}
                    className="button button1">
                    Read More
                  </Link>
                </div>
              </section>
      
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
    
  );
};

export default BlogDetails;
