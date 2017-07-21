import React from 'react';
import PropTypes from 'prop-types';

const HeadingSmall = ({title}) => {
  return (
    <h3 className="article-heading">{title}</h3>
  );
}

HeadingSmall.propTypes = {
  title: PropTypes.string.isRequired,
}

export default HeadingSmall;
