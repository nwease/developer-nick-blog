import React from 'react';
import '../css/Post.css';

function Post({id, post}) {
    return (
        <div className='post'>
            <div className='post__card'>
                <div className='post__container'>
                    <img className='post__image' src={post.imageUrl} alt={post.text}/>
                </div>

                <div className='post__content'>
                    <div className='post__caption'>
                        <h1>
                            {post.caption}
                        </h1>
                    </div>

                    <div className='post__text'>
                        {post.text}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;