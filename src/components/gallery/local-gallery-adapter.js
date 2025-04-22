import { getImage } from "gatsby-plugin-image"

export const LocalGalleryAdapter = {
  getThumbnail: (image) => image.node.childImageSharp,
  getFullSizeImage: (image) => image.node.childImageSharp.fullSize,
  transformData: (data) => {
    return data?.allFile?.edges || [];
  }
};