import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Layout from './components/Layout';
import Homepage from './containers/Homepage';

import registerServiceWorker from './registerServiceWorker';

const articleThumbnails = [
  {
    id: 1,
    hrefLink: '#',
    image: 'img/article-thumbnails/1.jpg',
    title: 'Art in Bali',
  },
  {
    id: 2,
    hrefLink: '#',
    image: 'img/article-thumbnails/2.jpg',
    title: 'Bangkok',
  }
];

ReactDOM.render(
  <Layout>
    <Homepage articleThumbnails={articleThumbnails} />
  </Layout>,
   document.getElementById('root')
);
registerServiceWorker();
