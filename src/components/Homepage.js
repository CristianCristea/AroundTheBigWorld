import React                from 'react';
import PropTypes            from 'prop-types';
import Navigation           from '../components/Navigation';
import BigHeader            from '../components/BigHeader';
import headerImage          from '../img/headers/board.jpg';
import SocialIconsNavbar    from '../components/SocialIconsNavbar';
import HeadingPrimary       from '../components/HeadingPrimary';
import ArticleThumbnails    from '../components/ArticleThumbnails';
import Footer               from '../components/Footer';

const Homepage = ({articleThumbnails, year, title}) => {
  return (
    <div>
      <Navigation />
      <BigHeader imageUrl={headerImage} positionY={50} />
      <HeadingPrimary title={title} />
      <SocialIconsNavbar socialLinks={{facebook: 'http://facebook.com', instagram: 'http://instagram.com', mail: 'contact@aroundthebigworld.com'}} />
      <ArticleThumbnails articleThumbnails={articleThumbnails} />
      <Footer year={year} />
    </div>
  );
}

Homepage.PropTypes = {
  articleThumbnaild:  PropTypes.object.isRequired,
  year:               PropTypes.number.isRequired,
  title:              PropTypes.string.isRequired
}

export default Homepage;
