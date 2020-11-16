import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Search as SearchIcon } from 'react-feather';
import styled from 'styled-components';

// style
import { Button } from './styled/lib';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1.25rem;
    background-color: #fff;
    box-shadow: var(--shadow-soft);
    font-size: 0.9rem;
    border-bottom: 1px solid var(--color-gray-light);
    ${Button} {
        margin-right: 1.25em;
    }
`;

const Logo = styled(Link)`
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--color-dark);
    text-decoration: none;
`;

const Search = styled.span`
    display: flex;
    margin-right: auto;
    margin-left: 1.25rem;
    border-radius: 3rem;
    border: 1px solid var(--color-gray-light);
    overflow: hidden;
    input {
        border: none;
        outline: none;
        padding: 0 1rem 0 0.3rem;
    }

    .icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: transparent;
        border: none;
        outline: none;
        padding: 0.6rem 0.6rem 0.6rem 1rem;
        color: var(--color-gray-dark);
    }
`;

const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

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
        <StyledHeader>
            <Logo to="/">twocents.</Logo>
            <Search>
                <span className="icon">
                    <SearchIcon size={16} />
                </span>
                <SearchForm onSubmit={handleSeachSubmit}>
                    <input
                        type="search"
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                    />
                </SearchForm>
            </Search>
            <Button as={Link} to="/ask" outline>
                Ask a question
            </Button>
            <Button as={Link} to="/login" primary>
                Login
            </Button>
        </StyledHeader>
    );
};

export default withRouter(Header);
