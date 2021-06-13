import * as React from "react";
import PhotoGallery from "../modules/views/PhotoGallery";
import BottomEngagement from "../modules/views/BottomEngagement";
import AppFooter from "../modules/views/AppFooter";
import ProductHero from "../modules/views/ProductHero";
import ProductValues from "../modules/views/ProductValues";
import ProductHowItWorks from "../modules/views/ProductHowItWorks";
import ProductCTA from "../modules/views/ProductCTA";
import SiteAppBar from "../modules/views/SiteAppBar";
import withRoot from "../modules/withRoot";
import { Photo } from "@material-ui/icons";

function Index() {
  return (
    <React.Fragment>
      <SiteAppBar />
      <ProductHero />
      {/* <ProductValues /> */}
      <PhotoGallery />
      {/* <ProductHowItWorks /> */}
      {/* <ProductCTA /> */}
      <BottomEngagement />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
