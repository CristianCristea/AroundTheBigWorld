import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import sanitizeHTML from 'sanitize-html-react'; TODO: sanitize html input to except script tags
import Layout from './components/Layout';
import Homepage from './components/Homepage';
import About from './components/About';
// import Photos from './components/Photos';
// import PageNotFound from './components/PageNotFound';

/* routes
  / - Homepage
  /destinations/:destinationName - single destinations posts
  /destinations/:destinationsName/:postName - single post
  /about
  /disclaimer
  /photos - link to instagram - evtl photos app
  /404 - page not found
  /search/:searchWords - TODO: serch page
*/

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       posts: [],
       pages: []
    };
  }

  // returns the current year
  getCurrentYear() {
    return new Date().getFullYear();
  }

  // fetch all posts from Wordpress API
  getPosts(url) {
    fetch(url)
      .then((response) => response.json())
      .then((response) => this.setState({posts: response}))
      .catch(err => console.log(err))
  }

  // fetch all pages from Wordpress API
  getPages(url) {
    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({pages: response}))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getPosts('http://localhost/wordpress/wp-json/wp/v2/posts');
    this.getPages('http://localhost/wordpress/wp-json/wp/v2/pages');
  }

  // filter the pages by name (Wordpress slug) returns the page with the resp. name
  getPage(pages, name) {
    const filterPages = pages.filter(page => {
      return page.slug === name.toLowerCase();
    });

    return filterPages[0];
  }

  // TODO implement selectLastPosts() to display on Homepage

  render() {
    let year = this.getCurrentYear();
    let aboutPage = this.getPage(this.state.pages, 'about');

    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" render={()=><Homepage articleThumbnails={this.state.posts} title="Around The Big World" year={year}/>} />
            <Route path="/about" render={()=><About title={aboutPage.title.rendered} content={aboutPage.content.rendered} imageUrl={aboutPage.acf.header_image.url} year={year}/>} />
            {/* <Route path="/photos" component={Photos} />
            <Route path="/destinations/bali" render={ () => <AppDataContainer articleThumbnails={articleThumbnails.bali} /> } />
            <Route path="/destinations/bangkok" render={ () => <AppDataContainer articleThumbnails={articleThumbnails.bangkok} /> } />
            <Route path="/destinations/singapore" render={ () => <AppDataContainer articleThumbnails={articleThumbnails.singapore} /> } />
            <Route component={PageNotFound} /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
