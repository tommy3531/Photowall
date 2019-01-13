import React, {Component} from 'react';

class Photo extends Component {
    render() {
        const post = this.props.post
        return <figure>
                <img src={post.imageLink} alt={post.description} />
                <figcaption><p>{post.description}</p></figcaption>
                <div>
                    <button>Remove</button>
                </div>
        </figure>
    }
}

export default Photo