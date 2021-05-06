import * as React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Markdown from "../components/Markdown";
import Typography from "../components/Typography";
import SiteAppBar from "../modules/views/SiteAppBar";
import AppFooter from "../modules/views/AppFooter";
import withRoot from "../modules/withRoot";
import privacy from "../modules/views/privacy.md";

function Privacy() {
  return (
    <React.Fragment>
      <SiteAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Privacy);
