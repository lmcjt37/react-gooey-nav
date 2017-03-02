import React from 'react';
import Main from './theme/main';
import Nav from './containers/Nav';
import features from './config/features';
import {Button, IconButton} from 'react-toolbox/lib/button';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            idx: 1
        };
    }

    setIndex = (index) => {
        this.setState({
            ...{ idx: index }
        });
    }


    handleStateChange = (data) => {
        this.setState({
            ...data
        });
    }

    render() {
        const { isOpen, idx } = this.state;

        const getButtons = () => {
            return [1,2,3,4].map(i => {
                return (
                    <Button className={Main.button} label={`Version ${i}`} key={i} onMouseUp={() => this.setIndex(i)} raised primary />
                );
            });
        }

        return (
            <div className={ Main.fullPage } >
                <h1>React Gooey Menu</h1>
                <h4>This is a React port of the work done by <a href="http://codepen.io/lbebber">Lucas Bebber</a></h4>
                <h4>His work and example can be found here: <a href="http://codepen.io/lbebber/pen/LELBEo" target="_blank">Gooey Menu</a></h4>
                <h4>Changes include: React, Material styles, ripple effect css</h4>

                <div className={Main.buttonContainer}>
                    { getButtons() }
                </div>

                <Nav
                    isOpen={isOpen}
                    idx={idx}
                    features={features}
                    onStateChange={this.handleStateChange} />
            </div>
        );
    }
}
