import React                from 'react';
import PropTypes            from 'prop-types';
import Navigation           from '../components/Navigation';
import BigHeader            from '../components/BigHeader';
import headerImage          from '../img/headers/board.jpg';
import SocialIconsNavbar    from '../components/SocialIconsNavbar';
import HeadingPrimary       from '../components/HeadingPrimary';
import ArticleThumbnails    from '../components/ArticleThumbnails';
import Footer               from '../components/Footer';

const Homepage = ({destinations, posts, year, title, capitalizeWord}) => {
  return (
    <div>
      <Navigation destinations={destinations} capitalizeWord={capitalizeWord} />
      <BigHeader imageUrl={headerImage} positionY={50} />
      <HeadingPrimary title={title} />
      <SocialIconsNavbar socialLinks={{facebook: 'http://facebook.com', instagram: 'http://instagram.com', mail: 'contact@aroundthebigworld.com'}} />
      <ArticleThumbnails posts={posts} />
      <Footer year={year} />
    </div>
  );
}

Homepage.PropTypes = {
  posts:  PropTypes.object.isRequired,
  year:               PropTypes.number.isRequired,
  title:              PropTypes.string.isRequired
}

export default Homepage;
