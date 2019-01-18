import React, {Component} from 'react';

class Twitter extends Component {
    constructor() {
        super();
        this.state = {
            twitterData: []
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(twitterData => this.setState({twitterData}))
    }
    render() {
        return (
            <ul>
                {this.state.twitterData.map(({ title, body }) => 
                    <li>{title}-{body}</li>
                )}
            </ul>
        );
    }
}

export default Twitter