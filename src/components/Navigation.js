import React from 'react';
// import PropTypes from 'prop-types';
import logo from '../img/logo-white.png';
import {Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar default fixedTop collapseOnSelect>
      <Grid>
        <Row>
          <Col sm={8} smOffset={2} md={6} mdOffset={3} lg={5} lgOffset={4}>
            <Navbar.Header>
              <Navbar.Brand>
                <a className="navbar-brand" href="index.html"><img src={logo} alt="logo" /></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavDropdown eventKey={1} title="Destinations" id="basic-nav-dropdown">
                  <MenuItem eventKey={1.1} href='#'>Bali</MenuItem>
                  <MenuItem eventKey={1.2} href='#'>Bangkok</MenuItem>
                  <MenuItem eventKey={1.3} href='#'>Singapore</MenuItem>
                </NavDropdown>
                <NavItem eventKey={2} href="#">Photos</NavItem>
                <NavItem eventKey={3} href="#">About</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Grid>
    </Navbar>
  );
}

export default Navigation;
