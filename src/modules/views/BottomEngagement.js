import * as React from "react";
import PropTypes from "prop-types";
import { Button, Container, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const mailToString =
  "mailto:btaophotography@gmail.com?subject=Booking a photoshoot&body=Let me know what sort of photos you're looking for, how many people you're taking photos with, and what you find important in photographs!";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: "4px solid currentColor",
    borderRadius: 0,
    height: "auto",
    padding: theme.spacing(2, 5),
    alignSelf: "center",
    marginBottom: "10px",
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
});

function BottomEngagement(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button} href={mailToString}>
        <Typography variant="h4" component="span">
          Got any questions? Click Here!
        </Typography>
      </Button>
      <Typography variant="h6">Frequently Asked Questions</Typography>
      <Typography variant="subtitle2" align="left">
        How do I make a booking?
      </Typography>
      <Typography variant="body1" gutterBottom={true}>
        You can use the button above to send me an email! or feel free to reach
        me through Facebook/Instagram. Let me know what kind of shoot you're
        looking for, and we can go from there!
      </Typography>
      <Typography variant="subtitle2" align="left">
        Are you taking wedding/engagement bookings for the 2022 season?
      </Typography>
      <Typography variant="body1" gutterBottom={true}>
        Yes! I'm currently booking sessions for the 2022 season, send me an
        email with the button above to start a booking.
      </Typography>
      <Typography variant="subtitle2" align="left">
        What is your pricing like?
      </Typography>
      <Typography variant="body1" gutterBottom={true}>
        Portrait photoshoots start at $200/hr, and weddings start at $3000.
        Exact pricing for you and your needs will be personalized to you, so
        send me message so we can discuss. The rate for wedding is currently
        discounted as I build out my wedding portfolio. Book now to take
        advantage!
      </Typography>
      <Typography variant="subtitle2">
        Do I need to put down a deposit to book a shoot?
      </Typography>
      <Typography variant="body1" gutterBottom={true}>
        Yes, to finalize a booking and secure the date and time of the shoot, I
        require a deposit of 50% for portrait sessions, and 30% for weddings.
        The deposit is refundable up until 2 weeks before the day of the
        shoot/event. The rest of the payment is due 24hrs before the date of the
        shoot/event.
      </Typography>
      <Typography variant="subtitle2">
        Where are you located, and are you willing to travel?
      </Typography>
      <Typography variant="body1" gutterBottom={true}>
        I'm based in the NYC/Philly area, splitting time between the two cities,
        and consider anything within a 50 mile radius to be local. I also often
        visit San Francisco/Bay Area, and Pittsburgh, and if you're looking to
        book a shoot/wedding in those areas please message me! For destination
        weddings, I am also willing to travel, for an additional destination
        fee. This varies based on your specific wedding, so shoot me a message
        to talk about it!
      </Typography>
      <Typography variant="subtitle2">
        How do you deliver the photos after the shoot?
      </Typography>
      <Typography variant="body1" gutterBottom={true}>
        I will send you a link to a photo gallery with all the edited photos
        from your shoot, and from there you can use the integrated print shop to
        order any prints or photo products that you want! Photos will be ready
        roughly 2 weeks after a portrait session, or 6 weeks after a wedding.
      </Typography>
      <Typography variant="subtitle2">
        Can I post your photos to my social media?
      </Typography>
      <Typography variant="body1" gutterBottom={true}>
        Absolutely! All sessions include rights to post, share, and print any
        photos from the shoot! I only ask that you don't further edit or filter
        my photos, as I consider my editing a part of my work and wish that they
        be shared as they were delivered. Photo credit would also be greatly
        appreciated, either a call out or link to my website/business name,
        Brian Tao Photography, or my facebook (linked below), or my instagram
        @btao1234. Thank you!
      </Typography>
    </Container>
  );
}

BottomEngagement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomEngagement);
