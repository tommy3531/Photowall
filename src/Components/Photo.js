import React from 'react';

function Photo(props) {
    const post = props.post
    return <figure>
            <img src={post.imageLink} alt={post.description} />
            <figcaption><p>{post.description}</p></figcaption>
            <div>
                <button onClick = {() => {
                    props.onRemovePhoto(post)
                }}>Remove</button>
            </div>
    </figure>
}

export default Photo