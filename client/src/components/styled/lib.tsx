import styled, { css } from 'styled-components';

export const Card = styled.div`
    margin-bottom: 1em;
    padding: 1rem;
    background-color: #fff;
    box-shadow: var(--shadow-soft);
    border: 1px solid var(--color-gray-light);
`;

export const Layout = styled.div`
    margin-top: 2em;
    display: grid;
    gap: 2em;
    grid-template-columns: 3fr 1fr;
    grid-template-areas: 'Main Sidebar';
`;

export const LayoutInverted = styled(Layout)`
    grid-template-columns: 1fr 3fr;
    grid-template-areas: 'Sidebar Main';
`;

export const Main = styled.main`
    grid-area: Main;
`;

export const Sidebar = styled.aside`
    grid-area: Sidebar;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const StyledField = styled.input`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    padding: 0.5rem;
    :focus {
        outline: none;
    }
`;

export const StyledTextarea = styled.textarea`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    padding: 0.5rem;
    :focus {
        outline: none;
    }
`;

interface AlertProps {
    success?: boolean;
    error?: boolean;
}

export const Alert = styled.div<AlertProps>`
    margin: 1rem 0;
    padding: 1rem;

    background: #fff;
    border-left: 4px solid ${({ theme }) => theme.grey1};
    ${({ theme, success }) =>
        success &&
        css`
            color: ${theme.success};
            border-left-color: ${theme.success};
        `}
    ${({ theme, error }) =>
        error &&
        css`
            color: ${theme.error};
            border-left-color: ${theme.error};
        `}
`;

interface ButtonProps {
    primary?: boolean;
    outline?: boolean;
}

export const Button = styled.button<ButtonProps>`
    font-size: 0.85rem;
    border: none;
    padding: 0.4rem 1.2rem;
    cursor: pointer;
    border-radius: 2rem;
    transition: all 0.15s ease;
    text-decoration: none;
    border-width: 1px;
    border-style: solid;
    :focus {
        outline: none;
    }
    :disabled {
        cursor: default;
        opacity: 0.75;
    }
    ${(props) =>
        props.primary &&
        css`
            background-color: var(--color-primary);
            border-color: var(--color-primary);
            color: #fff;
        `}
    ${(props) =>
        props.outline &&
        css`
            border-color: var(--color-dark);
            color: var(--color-dark);
        `}
`;

export const Container = styled.div`
    margin: 0 1.25rem;
    @media screen and (min-width: 75rem) {
        max-width: 65rem;
        margin: 0 auto;
    }
`;
