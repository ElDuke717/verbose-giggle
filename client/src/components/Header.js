import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css'; // Optional: Add custom styles if needed

function Header() {
    return (
        <header className="header-container">
            <div className="header-content">
                <h1 className="header-title">Nebulous Reason</h1>
                <p className="header-tagline">Your go-to source for insightful articles and discussions.</p>
                <nav className="header-nav">
                    <Link to="/" className="header-link">Home</Link>
                    <Link to="/posts" className="header-link">Blog Posts</Link>
                    <Link to="/compose" className="header-link">Compose Post</Link> {/* New link */}
                    <Link to="/about" className="header-link">About</Link>
                    <Link to="/signup" className="header-link">Sign Up</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;