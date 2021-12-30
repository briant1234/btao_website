import React from "react";
import clsx from "clsx";

import { withStyles } from "@material-ui/core/styles";
import { AppBar, Link, Toolbar, Typography } from "@material-ui/core";
import { styles as toolbarStyles } from "../../components/Toolbar";

import { Link as RouterLink } from "react-router-dom";

// Import constants
import { SiteTitle } from "../../constants/Strings";

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  toolbarRoot: {
    height: 64,
    [theme.breakpoints.up("sm")]: {
      height: 70,
    },
  },
});

const siteLinks = {
  SiteTitle: "/",
  Weddings: "/wedding",
  Portraits: "/",
  About: "/",
  Pricing: "/",
};

/** renderSiteLinks: Iterate through siteLinks object and generates a Link Component
 *  @param links: {object}
 */
const renderSiteLinks = (links) => {
  return Object.entries(links).forEach(([title, path]) => {
    <Link varient="h6" underline="none" color="inherit" href={path}>
      {title}
    </Link>;
  });
};

function SiteAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar style={{ color: "main" }} position="fixed">
        <Toolbar style={{ height: 70 }} className={classes.toolbar}>
          {/* {renderSiteLinks(siteLinks)} */}
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            // className={classes.title}
            href="/"
          >
            {SiteTitle}
          </Link>
          <div className={classes.right}>
            {/* <RouterLink to="/wedding">
            <Typography
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/wedding"
            >
              {"Weddings"}
            </Typography>
            </RouterLink>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href={siteLinks.Portraits}
            >
              {"Portraits"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href={siteLinks.About}
            >
              {"About"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href={siteLinks.Pricing}
            >
              {"Pricing"}
            </Link> */}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

export default withStyles(styles)(SiteAppBar);
