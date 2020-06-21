import {graphql} from 'gatsby'
import React from 'react'

import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'
import Layout from "../components/layout"
import CenteredBody from "../components/centered-body";

const MediaGallery = ({data}) => {
    const images = data.allFile.edges.map(({node}) => node.childImageSharp)
    // `images` is an array of objects with `thumb` and `full`
    return (
        <Layout>
            <CenteredBody>
                <Gallery images={images}/>
            </CenteredBody>
        </Layout>
    )
}

export const query = graphql`
  query ImagesForGallery {
    allFile {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default MediaGallery
