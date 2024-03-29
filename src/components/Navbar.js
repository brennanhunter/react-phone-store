import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavLogo from '../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                    {/*  
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk  */}
                    <Link to = '/'><img src={NavLogo} alt="store"
                    className="navbar-brand" /></Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to = "/" className="nav-link">
                                Product
                            </Link>
                        </li>
                    </ul>
                    <Link to = "/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <FontAwesomeIcon icon = "cart-plus" /> My Cart
                            </span>
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
            </div>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform:capitalize;
}
`