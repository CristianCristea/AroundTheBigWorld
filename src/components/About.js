import React                from 'react';
import PropTypes            from 'prop-types';
import Navigation           from '../components/Navigation';
import SmallHeader          from '../components/SmallHeader';
import HeadingSecondary          from '../components/HeadingSecondary';
import SocialIconsNavbar    from '../components/SocialIconsNavbar';
import Footer               from '../components/Footer';

const About = ({title, content, imageUrl, destinations, capitalizeWord, year}) => {
  return (
    <div>
      <Navigation destinations={destinations} capitalizeWord={capitalizeWord} />
      <SmallHeader imageUrl={imageUrl} positionY={50}>
        <HeadingSecondary title={title} />
      </SmallHeader>
      <SocialIconsNavbar socialLinks={{facebook: 'http://facebook.com', instagram: 'http://instagram.com', mail: 'contact@aroundthebigworld.com'}} />
      <div dangerouslySetInnerHTML={{__html: content}}></div>
      <Footer year={year} />
    </div>
  );
}

About.propTypes = {
title:          PropTypes.string.isRequired,
content:        PropTypes.string.isRequired,
imageUrl:       PropTypes.string.isRequired,
destinations:   PropTypes.array.isRequired,
year:           PropTypes.number.isRequired
}

export default About;
