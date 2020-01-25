import React from 'react';
import HomeHeader from '../../components/organisms/Header/HomeHeader';
import HomepageTemplate from '../../templates/HomepageTemplate';
import Layout from '../../templates/Layout/Layout';
import SEO from '../../components/atoms/SEO';
import Introduction from '../../components/organisms/Content/Introduction';

const Homepage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <HomepageTemplate header={<HomeHeader />}>
        <Introduction />
      </HomepageTemplate>
    </Layout>
  );
};

export default Homepage;
