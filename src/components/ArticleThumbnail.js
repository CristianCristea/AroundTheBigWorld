import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import HeadingSmall from '../components/HeadingSmall';

const ArticleThumbnail = ({title, imageUrl}) => {
  return (
    <figure className="article-thumbnail">
      <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={8} mdOffset={2}>
        <Link to={`/destinations/${title.toLowerCase()}`}>
          <img src={imageUrl} alt={title} title={title} />
          <figcaption>
            <HeadingSmall title={title} />
          </figcaption>
        </Link>
      </Col>
    </figure>
  );
}

ArticleThumbnail.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ArticleThumbnail;
