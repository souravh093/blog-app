import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='flex space-x-5'>
            <Link to={"/"}>Technology</Link>
            <Link to={"/"}>Gadget</Link>
            <Link to={"/"}>Software</Link>
            <Link to={"/"}>Apps</Link>
            <Link to={"/"}>Games</Link>
            <Link to={"/"}>Podcasts</Link>
        </div>
    );
};

export default Menu;