
import React, { useState, } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link, Outlet } from 'react-router-dom';
const Header = () => {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  return (
   <>
   <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>React</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  <Link to="/">Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  <Link to="/About">About</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  <Link to="/Contact">Contact</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  <Link to="/Example">Example</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  <Link to="/Register">Register</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
          </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

   </>
  )
}

export default Header;

