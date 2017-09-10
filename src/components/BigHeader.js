import React from "react";
import PropTypes from "prop-types";

const BigHeader = ({ imageUrl, positionY }) => {
  return (
    <header
      className="main-header"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `${positionY}% center`
      }}
    />
  );
};

BigHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  positionY: PropTypes.number.isRequired
};

export default BigHeader;
