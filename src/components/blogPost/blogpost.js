import React from 'react';
import { marked } from 'marked';


const BlogPost = ({posts}) => {
    console.log(posts)
    const { titles, images, content} = posts.fields
    const postDescription = marked(content)
    
    
    return (
    <div className="">
        <div className="">
        {images && <img classname="" src={images.fields.file.url} alt={titles} />}
            <div className=''>
            <h2 className=''>
                {titles}
            </h2>
            </div>
        <section className='' dangerouslySetInnerHTML={{ __html: postDescription }} />
        </div>
    </div>
  )
}





export default BlogPost;