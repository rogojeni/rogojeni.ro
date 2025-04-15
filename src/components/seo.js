import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteDescription
            author
            siteUrl
            siteImage
            siteLanguage
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.siteDescription
  const defaultImage = site.siteMetadata.siteImage
  const metaImage = image ? `${site.siteMetadata.siteUrl}${image}` : `${site.siteMetadata.siteUrl}${defaultImage}`

  return (
    <Helmet
      htmlAttributes={{
        lang: lang || site.siteMetadata.siteLanguage,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(meta || [])}
    />
  )
}