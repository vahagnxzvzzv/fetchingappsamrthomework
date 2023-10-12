import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
const Header = () => {
    return (
        <header>
            <NavLink to='./posts'>Posts</NavLink>
            <NavLink to='./comments'>Comments</NavLink>
            <NavLink to='./albums'>Albums</NavLink>
            <NavLink to='./photos'>Photos</NavLink>
            <NavLink to='./todos'>Todos</NavLink>
            <NavLink to='./users'>Users</NavLink>
        </header>
    )
};
export default Header;