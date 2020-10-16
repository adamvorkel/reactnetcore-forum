import React from 'react';
import { Search, User } from 'react-feather';

export const Header = () => (
    <header className="app-header">
        <a href="./" className="logo">GoodAdvice</a>
        <span className="search">
            <button className="search-button">
                <Search size={16} />
            </button>
            <input type="search" className="search-input" placeholder="Search..." />
        </span>
        <a href="./login" className="login">
            <span className="login-icon"><User size={16} /></span>
            <span className="login-text">Login</span>
        </a>
    </header>
)