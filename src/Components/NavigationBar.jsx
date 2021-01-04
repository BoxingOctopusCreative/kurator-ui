import React from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: black;
    color: white;
  }

  .img-fluid {
    height: 70px;
    padding: 10px;
  }
`

const logoUrl = 'https://kurator-public-assets.nyc3.digitaloceanspaces.com/Logo-Black-Wide-Transparent.png'

const NavigationBar = () => (
  <Styles>
    <MDBNavbar expand="lg">
      <MDBNavbarBrand href="/"><img src={logoUrl} className='img-fluid' alt="KÜRAT[OR]" /></MDBNavbarBrand>
      <MDBNavbarToggler aria-controls="basic-navbar-nav" />
      <MDBCollapse id="basic-navbar-nav">
        <MDBNavbarNav right>
          <MDBNavItem active>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/collection">Collection</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/wishlist">Wishlist</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/ordered">Ordered</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  </Styles>
);

export default NavigationBar;