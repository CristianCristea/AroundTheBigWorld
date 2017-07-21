import React from 'react';

const BigHeader = ({backgroundImg, positionY}) => {
  return (
    <header className="main-header" style={{backgroundImage: `url(${backgroundImg})`, backgroundPosition: `${positionY}% center`}}></header>
  );
}

export default BigHeader;
