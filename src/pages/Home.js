import * as React from "react";
import ProductCategories from "../modules/views/ProductCategories";
import BottomEngagement from "../modules/views/BottomEngagement";
import AppFooter from "../modules/views/AppFooter";
import ProductHero from "../modules/views/ProductHero";
import ProductValues from "../modules/views/ProductValues";
import ProductHowItWorks from "../modules/views/ProductHowItWorks";
import ProductCTA from "../modules/views/ProductCTA";
import SiteAppBar from "../modules/views/SiteAppBar";
import withRoot from "../modules/withRoot";

function Index() {
  return (
    <React.Fragment>
      <SiteAppBar />
      <ProductHero />
      {/* <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA /> */}
      <BottomEngagement />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
