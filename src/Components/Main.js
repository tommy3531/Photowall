import React, {Component} from 'react';

// Common Components
import Header from '../Common/Header';
import Layout from '../Pages/Layout';

// Pages
import Home from '../Pages/Home';
import About from '../Pages/About';
import Dashboard from '../Dashboard';
import Twitter from '../API/Twitter';
import PhotoWall from './PhotoWall';

// Routes
import {Route} from 'react-router-dom';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                id: "0",
                description: "Placholder1",
                imageLink: "https://via.placeholder.c  om/150"
            }, {
                id: "1",
                description: "Placholder2",
                imageLink: "https://via.placeholder.com/150"
        
            }]
        }
        this.removePhoto = this.removePhoto.bind(this);
        console.log('Constructor')
    }

    removePhoto(postsRemoved) {
        console.log(postsRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postsRemoved)
        }))
    }

    componentDidMount() {
        console.log('Component Did Mount')
    }

    componentDidUpdate() {
        alert('re-render')
    }
    
    render() {
        console.log('Render')
        return(
            <div>
                <Route exact path = "/" render={() => (
                <div>
                    <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
                </div>
                )}/>
                <Route path ="/home" component={Home} />
                <Route path ="/about" component={About} />
                <Route path ="/dashboard" component={Dashboard} />
                <Route path ="/twitter" component={Twitter} />
                <Route path ="/header" component={Header} />
                <Route path ="/layout" component={Layout} />
            </div>

        )
        
    }
}


export default Main
