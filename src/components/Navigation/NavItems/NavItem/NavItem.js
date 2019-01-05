import React from 'react'
import sytles from './Navitem.css';
const NavItem = (props) => (
    <li className={sytles.NavItem}>
        <a href={props.link} 
        className={props.active ? sytles.active:null}>
        {props.children}</a>
    </li>
);

export default NavItem
