import React from 'react';
import themedGooeyNav1 from '../theme/themedGooeyNav1';
import themedGooeyNav2 from '../theme/themedGooeyNav2';
import themedGooeyNav3 from '../theme/themedGooeyNav3';
import themedGooeyNav4 from '../theme/themedGooeyNav4';
import GooeyNavItem from '../components/gooeyNavItem';
import GooeySvg from '../components/gooeySvg';

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

    getNavItems(theme) {

        const array = [];
        for (var prop in this.props.features) {
            array.push(prop);
        }

        return array.map(name => {
            return (
                <GooeyNavItem
                    key={name}
                    theme={theme}
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

        let themedGooeyNav;
        switch(this.props.idx) {
            case 1:
                themedGooeyNav = themedGooeyNav1;
                break;
            case 2:
                themedGooeyNav = themedGooeyNav2;
                break;
            case 3:
                themedGooeyNav = themedGooeyNav3;
                break;
            case 4:
                themedGooeyNav = themedGooeyNav4;
                break;
        }

        return (
            <nav className={themedGooeyNav.menu}>
                <input type="checkbox" href="#" className={ themedGooeyNav['menu-open'] } name="menu-open" id="menu-open" onChange={ () => this.onToggle() } />
                <label className={ themedGooeyNav['menu-open-button'] } htmlFor="menu-open" >
                    <span className={`${themedGooeyNav.hamburger} ${themedGooeyNav['hamburger-1']}`}></span>
                    <span className={`${themedGooeyNav.hamburger} ${themedGooeyNav['hamburger-2']}`}></span>
                    <span className={`${themedGooeyNav.hamburger} ${themedGooeyNav['hamburger-3']}`}></span>
                </label>

                {this.getNavItems(themedGooeyNav)}

            </nav>
        );
    }
}
