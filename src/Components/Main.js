import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';


// Common Components
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Navbar from '../Common/Navbar';

// Pages
import Home from '../Pages/Home';
import About from '../Pages/About';
import Dashboard from '../Dashboard';
import Twitter from '../API/Twitter';
import PhotoWall from './PhotoWall';
import Layout from '../Pages/Layout';

// Routes

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
            <BrowserRouter>
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
            </BrowserRouter>

        )
        
    }
}


export default Main
