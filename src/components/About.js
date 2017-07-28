import React                from 'react';
import PropTypes            from 'prop-types';
import Navigation           from '../components/Navigation';
import SmallHeader          from '../components/SmallHeader';
import SocialIconsNavbar    from '../components/SocialIconsNavbar';
import Footer               from '../components/Footer';

const About = ({title, content, imageUrl, year}) => {
  return (
    <div>
      <Navigation />
      <SmallHeader imageUrl={imageUrl} positionY={50} title={title}/>
      <SocialIconsNavbar socialLinks={{facebook: 'http://facebook.com', instagram: 'http://instagram.com', mail: 'contact@aroundthebigworld.com'}} />
      <div dangerouslySetInnerHTML={{__html: content}}></div>
      <Footer year={year} />
    </div>
  );
}

About.propTypes = {
  title:    PropTypes.string.isRequired,
  content:  PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  year:     PropTypes.number.isRequired
}

export default About;
