import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <div className="items">
                    <Link to="/about">About US</Link>
                    <Link to="/contact">Upcoming Events</Link>
                    <Link to="/search">Search</Link>
                    {/* <Link to="/">Login</Link> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
