import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                id: "0",
                description: "Placholder1",
                imageLink: "https://via.placeholder.com/150"
            }, {
                id: "1",
                description: "Placholder2",
                imageLink: "https://via.placeholder.com/150"
        
            }]
        }
        this.removePhoto = this.removePhoto.bind(this);
    }
    removePhoto(postsRemoved) {
        console.log(postsRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postsRemoved)
        }))
    }
    render() {
        return (
            <div>
                <Title title={'Photowall'}/>
                <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
            </div>
        )
    }
}

export default Main
