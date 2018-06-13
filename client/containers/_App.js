import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

class App extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     response: ''
        // };
    }

    componentDidMount() {
        // this.callApi()
        //     .then(res => this.setState({ response: res.express }))
        //     .catch(err => console.log(err));
    }

    // async callApi() {
    //     const response = await fetch('/api/hello');
    //     const body = await response.json();

    //     if (response.status !== 200) throw Error(body.message);

    //     return body;
    // };

    render() {
        return (
            <div>
                <header>
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About</Link>
                </header>

                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about-us" component={About} />
                </main>

                {/* <p className="App-intro">{this.state.response}</p> */}

            </div>
        );
    }
}
export default App;
