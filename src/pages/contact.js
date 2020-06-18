import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/iframe.css"

export default function Contact({ data }) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>E-mail: <a href="mailto:contact@rogojeni.ro">contact@rogojeni.ro</a></p>
      <div className="iframe-container">
        <iframe
          className="responsive-iframe"
          title={data.site.siteMetadata.title}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11090.337148192246!2d28.08066848980204!3d45.979562015764955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b668f2f4b88847%3A0xe21801a74a471c6b!2sRogojeni%2C%20Moldova!5e0!3m2!1sen!2sro!4v1589874605182!5m2!1sen!2sro"
          width="800" height="400" frameBorder="0"></iframe>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
