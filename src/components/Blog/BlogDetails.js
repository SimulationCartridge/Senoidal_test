import React, { useEffect, useState } from 'react';
import { client } from '../../client';
import {useParams } from 'react-router-dom';

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
<div class="container-detail">
  <section class="blog-post">
    <img className="post-image-full"src={singleBlogPost?.fields?.images?.fields?.file?.url} title="" alt={singleBlogPost?.fields?.titles}  />
    <h2>{singleBlogPost?.fields?.titles}</h2>
    <div class="content">
      <p className='texto-detail'>{singleBlogPost?.fields?.content}</p>
    </div>
  </section>
</div>

  );
};

export default BlogDetails;
