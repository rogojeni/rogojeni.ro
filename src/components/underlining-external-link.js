import React from "react"
import "../styles/underlining-button.css"


export default function UnderliningExternalLink({ children, className, to }) {
  return (<a className={`nav-item ${className}`} href={to}>{children}</a>)
}
