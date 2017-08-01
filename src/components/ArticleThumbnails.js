import React            from 'react';
import PropTypes        from 'prop-types';
import { Grid, Row }    from 'react-bootstrap';
import ArticleThumbnail from './ArticleThumbnail';

const ArticleThumbnails = ({ posts }) => {
  let articles = posts.map((post) => {
    return (
      <Row key={post.id}>
        <ArticleThumbnail title={post.title.rendered} imageUrl={post.acf.thumbnail_image.url}/>
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
  posts: PropTypes.array.isRequired,
}

export default ArticleThumbnails;
