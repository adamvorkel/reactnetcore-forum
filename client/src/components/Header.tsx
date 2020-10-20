import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User } from 'react-feather';

export const Header = () => (
    <header className="Header">
        <Link to="/" className="logo">
            twocents.
        </Link>
        <span className="search">
            <button className="search-button">
                <Search size={16} />
            </button>
            <input
                type="search"
                className="search-input"
                placeholder="Search..."
            />
        </span>
        <Link to="/ask" className="btn btn-primary">
            Ask a question
        </Link>
        <Link to="/login" className="login">
            <span className="login-icon">
                <User size={16} />
            </span>
            <span className="login-text">Login</span>
        </Link>
    </header>
);
