/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Pricing from 'sections/pricing-v1';
import AgencyBanner from 'sections/agency-banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import OtherServices from 'sections/other-services';

// import { Container } from './styles';

function pages() {

  return(
    <ThemeProvider theme={theme}>
    <Layout>
      <SEO
        title="SteamGroups | Pricing"
        description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
      />
      <AgencyBanner />
      <Services />
      <Pricing />
      <Testimonials />
      <OtherServices />

    </Layout>
  </ThemeProvider>
  );
}

export default pages;