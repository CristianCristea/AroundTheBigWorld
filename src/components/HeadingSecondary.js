import React      from 'react';
import PropTypes  from 'prop-types';

const HeadingSecondary = ({title, color='white'}) => {
  return (
    <h2 className="heading-secondary" style={{color: color }}>{title}</h2>
  );
}

HeadingSecondary.propTypes = {
  title: PropTypes.string.isRequired,
}

export default HeadingSecondary;
