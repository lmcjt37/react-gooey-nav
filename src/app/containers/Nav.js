import React from 'react';
import themedGooeyNav from '../theme/themedGooeyNav.scss';
import GooeyNavItem from '../components/gooeyNavItem.js';
import GooeySvg from '../components/gooeySvg.js';

export default class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    onToggle() {
        this.props.onStateChange({
            isOpen: !this.props.isOpen
        });
    }

    handleClick(name) {
        console.log(`${name} was clicked!`);
    }

    getNavItems() {

        const array = [];
        for (var prop in this.props.features) {
            array.push(prop);
        }

        return array.map(name => {
            return (
                <GooeyNavItem
                    key={name}
                    theme={themedGooeyNav}
                    onClick={() => this.handleClick(name)}
                    {...this.props.features[name]} />
            );
        });

    }

    componentWillMount() {
        if (document.querySelector("#gooey-nav-svgs")) return;

        const domNode = GooeySvg({ id: "gooey-nav-svgs" });
        document.body.appendChild(domNode);
    }

    render() {
        return (
            <nav className={themedGooeyNav.menu}>
                <input type="checkbox" href="#" className={ themedGooeyNav['menu-open'] } name="menu-open" id="menu-open" onChange={ () => this.onToggle() } />
                <label className={ themedGooeyNav['menu-open-button'] } htmlFor="menu-open" >
                    <span className={`${themedGooeyNav.hamburger} ${themedGooeyNav['hamburger-1']}`}></span>
                    <span className={`${themedGooeyNav.hamburger} ${themedGooeyNav['hamburger-2']}`}></span>
                    <span className={`${themedGooeyNav.hamburger} ${themedGooeyNav['hamburger-3']}`}></span>
                </label>

                {this.getNavItems()}

            </nav>
        );
    }
}
