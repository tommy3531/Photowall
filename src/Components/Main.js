import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';

const posts = [{
        id: "0",
        description: "Placholder1",
        imageLink: "https://via.placeholder.com/150"
    }, {
        id: "1",
        description: "Placholder2",
        imageLink: "https://via.placeholder.com/150"

    }]

class Main extends Component {
    render() {
        return (
            <div>
                <Title title={'Photowall'}/>
                <PhotoWall posts={posts}/>
            </div>
        )
    }
}

export default Main
