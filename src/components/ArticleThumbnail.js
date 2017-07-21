import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import HeadingSmall from '../components/HeadingSmall';

const ArticleThumbnail = ({hrefLink, image, title}) => {
  return (
    <figure className="article-thumbnail">
      <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
        <a href={hrefLink}>
          <img src={image} alt={title} title={title} />
          <figcaption>
            <HeadingSmall title={title} />
          </figcaption>
        </a>
      </Col>
    </figure>
  );
}

ArticleThumbnail.propTypes = {
  hrefLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ArticleThumbnail;
