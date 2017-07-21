import React from 'react';
import PropTypes from 'prop-types';

const SocialIconsNavbar = ({socialLinks}) => {
  return (
    <section className="social-icons-small">
      <a href={socialLinks.facebook} className="btn-small btn-facebook"> </a>
      <a href={socialLinks.instagram} className="btn-small btn-instagram"> </a>
      <a href={socialLinks.mail} className="btn-small btn-mail"> </a>
    </section>
  );
}

SocialIconsNavbar.propTypes = {
  socialLinks: PropTypes.object.isRequired,
}

export default SocialIconsNavbar;
