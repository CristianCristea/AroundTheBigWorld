import React                from 'react';
// import PropTypes            from 'prop-types';
import { NavLink }          from 'react-router-dom';
import logo                 from '../img/logo-white.png';
import { LinkContainer }    from 'react-router-bootstrap';
import {
  Grid,Row, Col, Navbar,
  Nav, NavItem, NavDropdown, MenuItem
}                           from 'react-bootstrap';


const Navigation = () => {
  return (
    <Navbar default fixedTop collapseOnSelect>
      <Grid>
        <Row>
          <Col sm={8} smOffset={2} md={6} mdOffset={3} lg={5} lgOffset={4}>
            <Navbar.Header>
              <Navbar.Brand>
                <NavLink to="/" className="navbar-brand"><img src={logo} alt="logo" /></NavLink>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavDropdown eventKey={1} title="Destinations" id="basic-nav-dropdown">
                  <LinkContainer to="/destinations/bali"><MenuItem eventKey={1.1}>Bali</MenuItem></LinkContainer>
                  <LinkContainer to="/destinations/bangkok"><MenuItem eventKey={1.2}>Bangkok</MenuItem></LinkContainer>
                  <LinkContainer to="/destinations/singapore"><MenuItem eventKey={1.3}>Singapore</MenuItem></LinkContainer>
                </NavDropdown>
                <LinkContainer to="/photos"><NavItem eventKey={2}>Photos</NavItem></LinkContainer>
                <LinkContainer to="/about"><NavItem eventKey={3}>About</NavItem></LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Grid>
    </Navbar>
  );
}

export default Navigation;
