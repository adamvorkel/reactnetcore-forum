import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Search, User } from 'react-feather';

const Header: FC<RouteComponentProps> = ({ history, location }) => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || '';

    const [search, setSearch] = useState(query);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    };

    const handleSeachSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push(`/search?q=${search}`);
    };

    return (
        <header className="Header">
            <Link to="/" className="logo">
                twocents.
            </Link>
            <span className="search">
                <button className="search-button">
                    <Search size={16} />
                </button>
                <form onSubmit={handleSeachSubmit}>
                    <input
                        type="search"
                        value={search}
                        onChange={handleSearchChange}
                        className="search-input"
                        placeholder="Search..."
                    />
                </form>
            </span>
            <Link to="/ask" className="btn btn-primary">
                Ask a question
            </Link>
            <Link to="/login" className="login btn btn-outline">
                {/* <User size={16} /> */}
                <span className="login-text">Login</span>
            </Link>
        </header>
    );
};

export default withRouter(Header);
