import React from "react";
import PropTypes from "prop-types";

const SmallHeader = ({ imageUrl, positionY, children }) => {
  return (
    <header
      className="mini-header"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `${positionY}% center`
      }}
    >
      {children}
    </header>
  );
};

SmallHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  positionY: PropTypes.number.isRequired
};

export default SmallHeader;
