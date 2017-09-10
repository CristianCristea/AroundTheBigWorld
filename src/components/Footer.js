import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = ({ year }) => {
  return (
    <footer>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <p className="copyright">
              {year}
              <a
                href="http://aroundthebigworld.com"
                style={{ paddingRight: "10px", paddingLeft: "10px" }}
              >
                &copy;aroundthebigworld
              </a>{" "}
              &#8226; website created by{" "}
              <a
                href="https://cristiancristea.com"
                style={{ paddingRight: "10px" }}
              >
                Cristian Cristea
              </a>
              &#8226; <Link to="/disclaimer">Disclaimer</Link>
            </p>
          </Col>
        </Row>
      </Grid>
    </footer>
  );
};

Footer.propTypes = {
  year: PropTypes.number.isRequired
};

export default Footer;
