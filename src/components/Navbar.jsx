import React from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {MobileNavbar} from "./MobileNavbar";
import {DesktopNavbar} from "./DesktopNavbar";

const Nav = styled.div`
    display: flex;
    flex-flow: column nowrap;

    margin-left: auto;
`;

export const Navbar = (props) =>
{
    return (<Nav>
        <DesktopNavbar {...props} />
        <MobileNavbar {...props} />
    </Nav>);
}
