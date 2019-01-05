import React from 'react'
import sytles from './NavItems.css';
import NavigationItem from './NavItem/NavItem';
const NavItems = () => (
    <ul className={sytles.NavItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default NavItems
