import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
import ArticleThumbnail from './ArticleThumbnail';

const ArticleThumbnails = ({articleThumbnails}) => {
  console.log(articleThumbnails)
  return (
    <section className="articles">
      <Grid>
        {articleThumbnails.map((article) => {
          return (
            <Row>
              <ArticleThumbnail {...article} />
            </Row>
          );
        })}
      </Grid>
    </section>
  );
}

ArticleThumbnails.propTypes = {
  articleThumbnails: PropTypes.array.isRequired,
}

export default ArticleThumbnails;
