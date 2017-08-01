import React, { Component }             from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import sanitizeHTML from 'sanitize-html-react'; TODO: sanitize html input to except script tags
import Layout                           from './components/Layout';
import Homepage                         from './components/Homepage';
import About                            from './components/About';
import Photos                           from './components/Photos';
import PageNotFound                     from './components/PageNotFound';
import SinglePostPage                   from './components/SinglePostPage';

/* routes
  /                                         - index
  /destinations/:destinationName            - single destinations posts
  /destinations/:destinationsName/:postName - single post
  /about                                    - about page
  /disclaimer                               - disclaimer page
  /photos - link to instagram               - evtl photos app
  /404                                      - page not found
  /search/:searchWords                      - TODO: serch page
*/

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       posts: [],
       pages: [],
       destinations: []
    };
    this.capitalizeWord = this.capitalizeWord.bind(this);
  }

  // returns the current year
  getCurrentYear() {
    return new Date().getFullYear();
  }

  // fetch data from Wordpress API
  getData(url, dataName) {
    fetch(url)
      .then(response => response.json())
      .then(response => this.setState({[dataName]: response}))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData('http://localhost/wordpress/wp-json/wp/v2/posts', 'posts');
    this.getData('http://localhost/wordpress/wp-json/wp/v2/pages', 'pages');
    this.getData('http://localhost/wordpress/wp-json/wp/v2/categories', 'destinations');
  }

  // filter an array of strings and return the first string that matches
  filterFirstName(arr, name) {
    return arr.filter(string => string.slug === name.toLowerCase())[0];
  }

  // return an array of destinations, except all
  getDestinations(destinations, destinationName) {
    return destinations.reduce((destinations, destination) => {
      if (destination.hasOwnProperty(destinationName) && destination[destinationName] !== 'all') {
        destinations.push(destination[destinationName]);
      }
      return destinations;
    }, [])
  }

  // capitalize a word
  capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  getCurrentPost(posts, postName) {
    return posts.filter((post) => postName === post.slug)[0];
  }

  // TODO: implement selectLastPosts() to display on Homepage

  render() {
    let year = this.getCurrentYear();
    let aboutPage = this.filterFirstName(this.state.pages, 'about');
    let destinations = this.getDestinations(this.state.destinations, 'slug');

    return (
      // TODO: fix URL on refreshing and manually type
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" render={()=><Homepage destinations={destinations}
                                                        posts={this.state.posts}
                                                        title="Around The Big World"
                                                        year={year}
                                                        capitalizeWord={this.capitalizeWord}/>} />
            <Route path="/about" render={()=><About title={aboutPage.title.rendered}
                                                    content={aboutPage.content.rendered}
                                                    imageUrl={aboutPage.acf.header_image.url}
                                                    destinations={destinations}
                                                    capitalizeWord={this.capitalizeWord}
                                                    year={year}/>} />
            <Route path="/destinations/:name" render={(props) => <SinglePostPage posts={this.state.posts}
                                                                                 getCurrentPost={this.getCurrentPost}
                                                                                 destinations={destinations}
                                                                                 capitalizeWord={this.capitalizeWord}
                                                                                 year={year} {...props}/>} />
            <Route path="/photos" render={()=> window.location = "https://instagram.com"}/>
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
