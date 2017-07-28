import React      from 'react';
import PropTypes  from 'prop-types';

const SmallHeader = ({imageUrl, positionY, title}) => {
  return (
    <header className="mini-header" style={{backgroundImage: `url(${imageUrl})`, backgroundPosition: `${positionY}% center`}}>
      <h2 className="heading-secondary">{title}</h2>
    </header>
  );
}

SmallHeader.propTypes = {
  imageUrl:   PropTypes.string.isRequired,
  positionY:  PropTypes.number.isRequired,
  title:      PropTypes.string.isRequired 
}

export default SmallHeader;
