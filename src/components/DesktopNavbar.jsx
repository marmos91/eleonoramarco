import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {media} from '../theme';

const DesktopNav = styled.nav`
    display: none;

    ${media.desktop`
        display: flex;
    `}
`;

const DesktopNavigation = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DesktopNavigationLink = styled.li`
    margin: auto 1rem;
`;

const ScrollToLink = styled.a`
    font-family: 'Lato', sans-serif;
    font-size: .9rem;
    font-weight: 300;

    color: white;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
`;

export const DesktopNavbar = (props) =>
{
    const {i18n} = useTranslation();

    const scroll = (event, hash) =>
    {
        event.preventDefault();

        props.set_open(false);

        history.pushState({}, '', hash);

        const section = document.querySelector(hash);

        if(section)
            section.scrollIntoView({block: 'center', behavior: 'smooth'});
    };

    const render_links = () => props.links.map((link) => (
        <DesktopNavigationLink key={link.name}>
            <ScrollToLink href={link.link} onClick={(event) => scroll(event, link.link)}>{link.name}</ScrollToLink>
        </DesktopNavigationLink>
    ));

    const toggle_language = () =>
    {
        if(i18n.language === 'it')
            return '/en' + window.location.hash;

        return '/' + window.location.hash;
    };

    const render_language_switcher = () =>
    {
        return (<DesktopNavigationLink>
            <ScrollToLink href={toggle_language()}>{i18n.language === 'it' ? 'English version' : 'Versione italiana'}</ScrollToLink>
        </DesktopNavigationLink>);
    };

    return (<DesktopNav>
        <DesktopNavigation>
            {render_links()}
            {render_language_switcher()}
        </DesktopNavigation>
    </DesktopNav>);
}
