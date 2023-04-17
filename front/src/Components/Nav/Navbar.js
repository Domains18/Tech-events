import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <div className="items">
                    <Link to="/">About US</Link>
                    <Link to="/">Upcoming Events</Link>
                    <Link to="/">Past Events</Link>
                    <Link to="/">Search</Link>
                    <Link to="/">Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
