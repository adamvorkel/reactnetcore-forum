import React from 'react';
import { Search, User } from 'react-feather';

export const Header = () => (
    <div>
        <a href="./">GoodAdvice</a>
        <span><Search size={16} /><input type="search" placeholder="Search..." /></span>
        <a href="./login"><User size={16} /><span>Login</span></a>
    </div>
)