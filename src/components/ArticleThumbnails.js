import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
import ArticleThumbnail from './ArticleThumbnail';

const ArticleThumbnails = ({articleThumbnails}) => {
  let articles = articleThumbnails.map((article) => {
    return (
      <Row key={article.id}>
        <ArticleThumbnail title={article.title.rendered} imageUrl={article.acf.thumbnail_image.url}/>
      </Row>
    );
  });

  return (
    <section className="articles">
      <Grid>
        {articles}
      </Grid>
    </section>
  );
}

ArticleThumbnails.propTypes = {
  articleThumbnails: PropTypes.array.isRequired,
}

export default ArticleThumbnails;
