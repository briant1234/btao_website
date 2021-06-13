import * as React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button, Container, Typography } from "@material-ui/core";
import { LocalConvenienceStoreOutlined } from "@material-ui/icons";

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap",
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("md")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover": {
      zIndex: 1,
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15,
    },
    "&:hover $imageMarked": {
      opacity: 0,
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor",
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
});

function PhotoGallery(props) {
  const { classes } = props;
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    // fetch grad album url
    fetch("https://api.imgur.com/3/album/PodnaII/images", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Client-ID ae3b34fbed46c84",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        //get the data object
        const jsonData = json.data;
        const imageIDList = jsonData.map((imageObject) => {
          return imageObject.id;
        });
        return imageIDList;
      })
      .then((imageList) => {
        setGalleryImages(imageList);
      });
  }, []);

  const getThumbnailImage = () => {
    galleryImages.map((imageID) => {
      //adding a "t" to the end of the image id returns a thumbnail size image
      return "https://imgur.com/" + imageID + "t.jpg";
    });
  };

  const getImage = () => {
    galleryImages.map((imageID) => {
      //adding a "t" to the end of the image id returns a thumbnail size image
      return "https://imgur.com/" + imageID + ".jpg";
    });
  };

  return (
    <Container className={classes.root} component="section">
      {/* <Typography variant="h4" marked="center" align="center" component="h2">
        Check out some of my work here!
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div> */}
    </Container>
  );
}

PhotoGallery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhotoGallery);
