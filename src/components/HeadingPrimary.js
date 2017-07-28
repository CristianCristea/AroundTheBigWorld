import React      from 'react';
import PropTypes  from 'prop-types';

const HeadingPrimary = ({title}) => {
  return <h1 className="heading-primary">{title}</h1>
}

HeadingPrimary.propTypes = {
  title: PropTypes.string.isRequired
}

export default HeadingPrimary;
