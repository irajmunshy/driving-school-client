import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-area navbar navbar-expand-lg navbar-light">
            <div className="container py-4">
                <div className="nav-title">
                    <Link to="/"><h3>Driving School</h3></Link>
                </div>

                <div className="ms-auto">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/home" className="mx-3 nav-link text-white">Home</Link>
                            <Link to="/" className="mx-3 nav-link text-white">About</Link>
                            <Link to="/customer/book" className="mx-3 nav-link text-white">Customer</Link>
                            <Link to="/" className="mx-3 nav-link text-white">Contact</Link>
                            <Link to="/admin/orders" className="mx-3 nav-link text-white">Admin</Link>
                            <Link to="/login" className="mx-3 nav-link text-white">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;