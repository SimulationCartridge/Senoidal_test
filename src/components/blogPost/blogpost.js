    import React from 'react';
    import { marked } from 'marked';


    const BlogPost = ({ post }) => {
        const { titles, images, content } = post.fields;
    
        return (
        <div className="">
            <div className="">
            {images && (
                <img className="" src={images.fields.file.url} alt={titles} />
            )}
            <div className="">
                <h2 className="">{titles}</h2>
            </div>
            <section
                className=""
                dangerouslySetInnerHTML={{ __html: content }}
            />
            </div>
        </div>
        );
    };
    

    export default BlogPost;