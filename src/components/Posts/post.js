import React from 'react';
import { marked } from 'marked';


const Post = ({article}) => {
    console.log(article)
    const { titles, images, content} = article.fields
    const postDescription = marked(content)
    return (
    <div className="´post-card">
        <div className='image-container'>
        {images && <img className="post-image" src={images.fields.file.url} />}
            <div className='overlay'>
            <h2 classname="overlay-text">
                {titles}
            </h2>
            </div>
        <section className="content" dangerouslySetInnerHTML={{ __html: postDescription }} />
        </div>
    </div>
  )
}





export default Post;