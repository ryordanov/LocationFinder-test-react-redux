/* eslint linebreak-style: ["error", "unix"] */

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Menu from './Menu';
import Map from './Map/index';
import Footer from './Footer';

// import Home from './Home';

class App extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     response: ''
        // };
    }

    componentDidMount() {
    }


    render() {
        return (
            <div>
                <Menu />
                <Map />
                <Footer />

                <main>
                    {/* <Route exact path="/" component={Home} /> */}
                </main>
            </div>
        );
    }
}
export default App;
