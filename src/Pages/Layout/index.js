import React, {Component} from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Navbar from '../../Common/Navbar';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Layout Home!!!</h1>
                <div>
                    <Navbar />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Layout