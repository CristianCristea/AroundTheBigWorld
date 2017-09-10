import React from "react";
import PropTypes from "prop-types";

const HeadingSmall = ({ title, color = "white" }) => {
  return (
    <h3 className="article-heading" style={{ color: color }}>
      {title}
    </h3>
  );
};

HeadingSmall.propTypes = {
  title: PropTypes.string.isRequired
};

export default HeadingSmall;
