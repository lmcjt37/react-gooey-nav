import React from 'react';

export default ({
    onClick,
    theme,
    icon,
    label
}) => (
    <a href="#" {...{onClick}} className={ theme['menu-item'] } >
        <i className={`material-icons ${theme['menu-item-i']}`} >{icon}</i>
        <span className={ theme['menu-item-span']}>{label}</span>
    </a>
);
