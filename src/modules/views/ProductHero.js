import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import ProductHeroLayout from "./ProductHeroLayout";

const gradBackgroundImage = "https://i.imgur.com/1hEXI6a.jpg";

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
      <img
        style={{ display: "none" }}
        src={gradBackgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        {"Weddings & Portraits"}
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Photographer located around NYC/PA/NJ
      </Typography>
      <Button
        style={{ marginTop: "100px" }}
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
