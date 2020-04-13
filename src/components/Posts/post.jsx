import React from 'react';

const Post = (props) => {
const {author: {name, photo, nickname}, content, image, date} = props;
    return (   
        <div className='post'>
            <div className='post_head'>
                <div className='post_photo' >
                    <img className='photo' src= {photo} />
                </div>
                <div className='post_title' >
                    <h2>{name}</h2>
                    <h3>{nickname}</h3>
                    <span>{date}</span>
                    <p>{content}</p>
                </div>
            </div>
            <div className='post_content'>
                <img className="post_img" src={image} />
            </div>

        </div>
    
)
}

export default Post;