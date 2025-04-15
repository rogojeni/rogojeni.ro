import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/iframe.css"
import "../styles/contact.css"
import CenteredBody from "../components/centered-body"
import UnderliningExternalLink from "../components/underlining-external-link"

export default function Contact({ data }) {
  return (
    <Layout
      title="Contact"
      description="Contactați Alianța Rogojeni - Găsiți informații de contact și locația noastră"
    >
      <CenteredBody>
        <h1>{data.site.siteMetadata.title}</h1>

        <div className="contact-container">
          <div className="contact-item">
            <UnderliningExternalLink
              className="contact-link"
              to="mailto:contact@rogojeni.ro"
            >
              <img
                className="contact-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg"
                alt="Email icon"
                width="20"
                height="20"
                loading="lazy"
              />
              contact@rogojeni.ro
            </UnderliningExternalLink>
          </div>

          <div className="contact-item">
            <UnderliningExternalLink
              className="contact-link"
              to="https://www.instagram.com/alianta__rogojeni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="contact-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram icon"
                width="20"
                height="20"
                loading="lazy"
              />
              @alianta__rogojeni
            </UnderliningExternalLink>
          </div>
        </div>

        <div className="iframe-container">
          <iframe
            className="responsive-iframe"
            title="Locația Rogojeni pe hartă"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11090.337148192246!2d28.08066848980204!3d45.979562015764955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b668f2f4b88847%3A0xe21801a74a471c6b!2sRogojeni%2C%20Moldova!5e0!3m2!1sen!2sro!4v1589874605182!5m2!1sen!2sro"
            width="800"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </CenteredBody>
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
