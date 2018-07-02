/* eslint linebreak-style: ["error", "unix"] */

import React, { Component, Fragment } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Menu from './Menu';
import Map from './Map/index';
import Footer from './Footer';
import About from './About';

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
            <Fragment>
                <Menu />
                <Switch>
                    <Route exact path="/" component={Map} />
                    <Route exact path="/about" component={About} />
                </Switch>
                <Footer />
            </Fragment>
        );
    }
}
export default App;
