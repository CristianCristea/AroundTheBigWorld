import React, { Component } from 'react';
import Navigation           from '../components/Navigation';
import BigHeader            from '../components/BigHeader';
import SocialIconsNavbar    from '../components/SocialIconsNavbar';
import headerImage          from '../img/headers/board.jpg';
import ArticleThumbnails    from '../components/ArticleThumbnails';
import Footer               from '../components/Footer';

export default class AppDataContainer extends Component {
  constructor(props) {
    super(props);
  }

  currentYear() {
    return new Date().getFullYear();
  }

  render() {
    const { articleThumbnails } = this.props;
    let year = this.currentYear();

    return (
      <div>
        <Navigation />
        <BigHeader backgroundImg={headerImage} positionY={50} />
        <SocialIconsNavbar socialLinks={{facebook: 'http://facebook.com', instagram: 'http://instagram.com', mail: 'contact@aroundthebigworld.com'}} />
        <ArticleThumbnails articleThumbnails={articleThumbnails} />
        <Footer year={year} />
      </div>
    );
  }
}
