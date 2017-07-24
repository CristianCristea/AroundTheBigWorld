import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// TODO Disclaimer link
const Footer = ({year}) => {
  return (
    <footer>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <p className="copyright">
              {year}
              <a href="http://aroundthebigworld.com" style={{paddingRight: '10px', paddingLeft: '10px'}}>&copy;aroundthebigworld</a>  &#8226;
              website created by <a href="https://cristiancristea.com" style={{paddingRight: '10px'}}>Cristian Cristea</a>
              &#8226; <a href="disclaimer.html">Disclaimer</a>
            </p>
          </Col>
        </Row>
      </Grid>
    </footer>
  );
}

export default Footer;
