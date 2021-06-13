import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

//react-photo-gallery
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

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

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    // fetch grad album url
    fetch("https://api.imgur.com/3/album/PodnaII/images", {
      referrer: "",
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
        const imageList = jsonData.map((imageObject) => {
          return {
            src: imageObject.link,
            height: imageObject.height,
            width: imageObject.width,
          };
        });
        return imageList;
      })
      .then((imageList) => {
        setGalleryImages(imageList);
      });
  }, []);

  return (
    <Container className={classes.root} component="section">
      <Gallery photos={galleryImages} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={galleryImages.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  );
}

PhotoGallery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhotoGallery);
