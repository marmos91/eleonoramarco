import React, {useContext} from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {MobileNavbar} from "./MobileNavbar";

const Nav = styled.div`
    display: flex;
    flex-flow: column nowrap;

    margin-left: auto;
`;

export const Navbar = (props) =>
{
    const {t} = useTranslation();

    const links = [{
        name: t('menu.home'),
        link: '#home',
    }, {
        name: t('menu.location'),
        link: '#location',
    }, {
        name: t('menu.accomodation'),
        link: '#accomodation',
    }, {
        name: t('menu.rsvp'),
        link: '#rsvp',
    }, {
        name: t('menu.whishes'),
        link: '#whishes',
    }];

    return (<Nav>
        {/* <DesktopNav /> */}
        <MobileNavbar {...props} links={links} />
    </Nav>);
}
