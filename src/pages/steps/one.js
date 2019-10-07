import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const StepOne = ({ data }) => (
  <Layout>
    <Head pageTitle={data.stepOneJson.title} />
    <Box>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: data.stepOneJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

StepOne.propTypes = {
  data: PropTypes.object.isRequired,
};

export default StepOne;

export const query = graphql`
  query StepsOneQuery {
    stepOneJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
