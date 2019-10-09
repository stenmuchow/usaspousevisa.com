import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const StepTwo = ({ data }) => (
  <Layout>
    <Head pageTitle={data.stepTwoJson.title} />
    <Box>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: data.stepTwoJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

StepTwo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default StepTwo;

export const query = graphql`
  query StepsTwoQuery {
    stepTwoJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
