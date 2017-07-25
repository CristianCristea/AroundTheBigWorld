import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AppDataContainer from './containers/AppDataContainer';
import About from './components/About';
import Photos from './components/Photos';
import PageNotFound from './components/PageNotFound';

/* routes
  / - Homepage
  /destinations/:destinationName - single destinations posts
  /destinations/:destinationsName/:postName - single post
  /about
  /disclaimer
  /photos - link to instagram - evtl photos app
  /404 - page not found
  /search/:searchWords - TODO serch page
*/
const articleThumbnails = {
  bali: [
    {
      id: 1,
      image: '../img/article-thumbnails/1.jpg',
      title: 'Art in Bali',
    },
    {
      id: 2,
      image: '../img/article-thumbnails/2.jpg',
      title: 'Bali Rice Fields',
    }
  ],
  bangkok: [
    {
      id: 1,
      image: '../img/article-thumbnails/3.jpg',
      title: 'Bars in Bangkok',
    },
    {
      id: 2,
      image: '../img/article-thumbnails/30.jpg',
      title: 'Bangkok',
    }
  ],
  singapore: [
    {
      id: 1,
      image: '../img/article-thumbnails/1.jpg',
      title: 'Singapore Hotels',
    },
    {
      id: 2,
      image: '../img/article-thumbnails/2.jpg',
      title: 'Singapore Marina Bay Sands',
    }
  ]
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" render={ () => <AppDataContainer articleThumbnails={articleThumbnails.bangkok} /> } />
          <Route path="/about" component={About} />
          <Route path="/photos" component={Photos} />
          <Route path="/destinations/bali" render={ () => <AppDataContainer articleThumbnails={articleThumbnails.bali} /> } />
          <Route path="/destinations/bangkok" render={ () => <AppDataContainer articleThumbnails={articleThumbnails.bangkok} /> } />
          <Route path="/destinations/singapore" render={ () => <AppDataContainer articleThumbnails={articleThumbnails.singapore} /> } />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
