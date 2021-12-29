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
