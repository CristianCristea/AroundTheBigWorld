import React                from 'react';
import PropTypes            from 'prop-types';
import { Link }             from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
  Jumbotron
}                           from 'react-bootstrap';
import Navigation           from '../components/Navigation';
import SmallHeader          from '../components/SmallHeader';
import HeadingSecondary     from '../components/HeadingSecondary';
import SocialIconsNavbar    from '../components/SocialIconsNavbar';
import Footer               from '../components/Footer';

const PageNotFound = ({title, imageUrl, destinations, capitalizeWord, year}) => {
  return (
    <div>
      <Navigation destinations={destinations} capitalizeWord={capitalizeWord} />
      <SmallHeader imageUrl={imageUrl} positionY={50}>
        <HeadingSecondary title={title} />
      </SmallHeader>
      <SocialIconsNavbar socialLinks={{facebook: 'http://facebook.com', instagram: 'http://instagram.com', mail: 'contact@aroundthebigworld.com'}} />
      <Grid>
        <Row>
          <Col xs={10} md={8} xsOffset={1} mdOffset={2}>
            <Jumbotron style={{marginTop: "50px"}}>
              <p className="text">
                The page you are looking for does not exist or was moved to another location.
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Link to="/" className="btn-simple text-center" style={{display: "block", margin: "0 auto"}}>Back to Home</Link>
          </Col>
        </Row>
      </Grid>
      <Footer year={year} />
    </div>
  );
}

PageNotFound.propTypes = {
title:          PropTypes.string.isRequired,
imageUrl:       PropTypes.string.isRequired,
destinations:   PropTypes.array.isRequired,
year:           PropTypes.number.isRequired
}

export default PageNotFound;
