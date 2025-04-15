import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { Gallery, LocalGalleryAdapter } from "../components/gallery"

const MediaGallery = ({ data }) => {
  const images = LocalGalleryAdapter.transformData(data);

  return (
    <Layout
      title="Galerie Media"
      description="Explorați colecția noastră de imagini din Rogojeni - Momente și locuri memorabile din comunitatea noastră"
    >
      <Gallery
        images={images}
        getThumbnail={LocalGalleryAdapter.getThumbnail}
        getFullSizeImage={LocalGalleryAdapter.getFullSizeImage}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile(
      filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              width: 500
              height: 500
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP]
              transformOptions: { fit: COVER }
            )
            fullSize: gatsbyImageData(
              quality: 75
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP]
              layout: CONSTRAINED
              transformOptions: { fit: CONTAIN }
            )
          }
        }
      }
    }
  }
`;

export default MediaGallery;
