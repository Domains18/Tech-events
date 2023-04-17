import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Logo</Link>
                <div className="items">
                    <Link className='Link' to="/about">About US</Link>
                    <Link className='Link' to="/contact">Upcoming Events</Link>
                    <Link className='Link' to="/search">Search</Link>
                    <Link className="Link" to="/">Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
