import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User } from 'react-feather';

export const Header = () => (
    <header className="app-header">
        <Link to="/" className="logo">
            GoodAdvice
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
        <Link to="./login" className="login">
            <span className="login-icon">
                <User size={16} />
            </span>
            <span className="login-text">Login</span>
        </Link>
    </header>
);
