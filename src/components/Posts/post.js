import React from 'react';
import { marked } from 'marked';


const Post = ({article}) => {
    console.log(article)
    const { titles, images, content} = article.fields
    const postDescription = marked(content)
    
    
    return (
    <div className='post'>
        <div className="image-container">
        {images && <img classname="post-image" src={images.fields.file.url} alt={titles} />}
            <div className='overlay'>
            <h2 className='overlay-text'>
                {titles}
            </h2>
            </div>
        <section className='content' dangerouslySetInnerHTML={{ __html: postDescription }} />
        </div>
    </div>
  )
}





export default Post;