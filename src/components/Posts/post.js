import React from 'react';
import { marked } from 'marked';
import { Link } from 'react-router-dom/dist';


const Post = ({article}) => {
    const { titles, images, content} = article.fields
    const postDescription = marked(content)
    
    
    return (
        <div className="post">
          <div className="image-container">
            {images && (
              <img className="post-image" src={images.fields.file.url} alt={titles} />
            )}
            <Link to={`/archivo/${titles}`} className="overlay">
              <h2 className="overlay-text">{titles}</h2>
            </Link>
            <section
              className="content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      );
    };




export default Post;