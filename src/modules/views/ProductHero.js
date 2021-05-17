import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80";

const gradBackgroundImage =
  "https://lh3.googleusercontent.com/pw/ACtC-3fWamx5qRl677LD2-a-CEMyodKp35ymfQttvc2Lin7INkfJUUjxm-Y35a2hWp_3Qb-O5H6tyEiOgaefd2Img9QvVTumcOG2JFCalnwKORcPZ06JQ2V1TuTvK2gIg7Bk_5ElW9VTXigMFS9VRVUQfEoyNw=w1078-h719-no?authuser=0";
const styles = (theme) => ({
  background: {
    backgroundImage: `url(${gradBackgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      {/* <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      /> */}
      <Typography color="inherit" align="center" variant="h2" marked="center">
        {"Portraits & Weddings"}
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Pittsburgh & North-East based Photographer
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="mailto:btaophotography@gmail.com?subject=Booking a photoshoot&body=Let me know what sort of photos you're looking for, how many people you're taking photos with, and what you find important in photographs!"
      >
        Book Now
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        (Site is under construction, but press the button above to send me a
        message!, or reach me at 732-788-5560)
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
