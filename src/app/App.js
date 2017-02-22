import React from 'react';
import Main from './theme/main.scss';
import Nav from './containers/Nav.js';
import features from './config/features.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }


    handleStateChange = (data) => {
        this.setState({
            ...data
        });
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div className={ Main.fullPage } >
                <h1>React Gooey Menu</h1>
                <h4>This is a React port of the work done by <a href="http://codepen.io/lbebber">Lucas Bebber</a></h4>
                <h4>His example can be found here <a href="http://codepen.io/lbebber/pen/rawQKR" target="_blank">Version 4</a></h4>
                <h4>Changes include: React, Material styles, ripple effect css</h4>
                <Nav
                    isOpen={isOpen}
                    features={features}
                    onStateChange={this.handleStateChange} />
            </div>
        );
    }
}
