import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import BigHeader from '../components/BigHeader';
import SocialIconsNavbar from '../components/SocialIconsNavbar';
import headerImage from '../img/headers/board.jpg';

import ArticleThumbnails from '../components/ArticleThumbnails';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleThumbnails: props.articleThumbnails
    }
  }

  render() {
    const { articleThumbnails } = this.state;

    return (
      <div>
        <Navigation />
        <BigHeader backgroundImg={headerImage} positionY={50} />
        <SocialIconsNavbar socialLinks={{facebook: 'http://facebook.com', instagram: 'http://instagram.com', mail: 'contact@aroundthebigworld.com'}} />
        <ArticleThumbnails articleThumbnails={articleThumbnails}/>
      </div>
    );
  }
}
