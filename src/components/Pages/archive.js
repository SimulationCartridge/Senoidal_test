import React, { useState, useEffect} from 'react';
import {client} from '../../client'
import BlogPosts from '../blogPost/blogPosts';


function Archive  ()  {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    client.getEntries()
      .then((response) => {
        console.log(response);
        setPosts(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Crear nuevo post</h1>
      <BlogPosts  BlogPosts={posts}/>
      </div>
  )
};

export default Archive;