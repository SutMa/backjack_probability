import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const PrimaryNav = styled.nav`
    z-index: 14;
    height: 65px;
    display: flex;
    background: #000000;
    justify-content: space-between;
    padding: 0.18rem 20px;
`

export const MenuLink = styled(Link)`
    flex: left;
    color: #fff;
    display: block;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    padding: 16px 14px;
    &.active {
        border-bottom: 3px solid white;
    }
    &:hover {
        border-bottom: 3px solid white;
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`

export const Logo = styled.h1`
    color: #fff;
    display: flex;
    text-decoration: none;
    padding: 0 1.2rem;
    height: 100%;
    justify-content: left;
`