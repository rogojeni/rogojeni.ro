import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import "../styles/layout.css"
import logo from "../images/banner.png"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const [open, toggleMenu] = useState(false)

  return (
    <div>
      <nav>
        <div className="logo">
          <Link to={`/`}>
            <img src={logo} alt="Logo"/>
          </Link>
        </div>
        <div className="hamburger" onClick={() => toggleMenu(!open)}>
          <div className="line"/>
          <div className="line"/>
          <div className="line"/>
        </div>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <Link className={`nav-item ${open ? "fade" : ""}`} to={`/home`}>
            Acasă
          </Link>
          <Link className={`nav-item ${open ? "fade" : ""}`} to={`/about/`}>
            Despre noi
          </Link>
          <Link className={`nav-item ${open ? "fade" : ""}`} to={`/gallery/`}>
            Galerie Media
          </Link>
          <Link className={`nav-item ${open ? "fade" : ""}`} to={`/coming-soon/`}>
            Proiecte
          </Link>
          <Link className={`nav-item ${open ? "fade" : ""}`} to={`/contact/`}>
            Contact
          </Link>
        </ul>
      </nav>
      <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
        {children}
      </div>
    </div>
  )
}
