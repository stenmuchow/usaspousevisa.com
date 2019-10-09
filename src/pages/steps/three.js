import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const StepThree = ({ data }) => (
  <Layout>
    <Head pageTitle={data.stepThreeJson.title} />
    <Box>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: data.stepThreeJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

StepThree.propTypes = {
  data: PropTypes.object.isRequired,
};

export default StepThree;

export const query = graphql`
  query StepsThreeQuery {
    stepThreeJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
