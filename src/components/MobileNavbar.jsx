import React from "react";
import styled from "styled-components";
import {Burger} from "./Burger";
import {media} from '../theme';

const MobileNav = styled.nav`
    display: block;

    ${media.desktop`
        display: none;
    `}
`;

const MobileNavigation = styled.ul`
    display: ${props => props.open ? 'flex' : 'none'};

    position: fixed;
    top: 3.4rem;
    left: 0;
    width: 100%;
    height: 100vh;

    background-color: #222;

    flex-direction: column;
    list-style: none;

    box-sizing: border-box;
    padding: 2rem;

    z-index: 999;
`;

const MobileNavigationLink = styled.li`
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-weight: 100;

    padding: .8rem 0;
`;

const ScrollToLink = styled.a`
    color: white;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    font-size: .9rem;
    font-weight: 300;
`;

export const MobileNavbar = (props) =>
{
    const scroll = (event, hash) =>
    {
        event.preventDefault();

        props.set_open(false);
        document.querySelector(hash).scrollIntoView({block: 'center', behavior: 'smooth'});
    };

    const render_links = () => props.links.map((link) => (
        <MobileNavigationLink key={link.name}>
            <ScrollToLink href={link.link} onClick={(event) => scroll(event, link.link)}>{link.name}</ScrollToLink>
        </MobileNavigationLink>
    ));

    return (<MobileNav>
        <Burger open={props.open} set_open={props.set_open} />
        <MobileNavigation open={props.open} >
            {render_links()}
        </MobileNavigation>
    </MobileNav>);
}
