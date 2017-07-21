import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({children}) => {
  return (
    <div className="app">
      <main>
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout;
