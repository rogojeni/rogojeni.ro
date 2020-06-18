import React from "react"
import Layout from "../components/layout"
import "../styles/video.css"

export default function Index() {
  return (
    <Layout>
      <div className="vimeo-wrapper">
        <div className="overlay"/>
        <iframe tile="alianta rogojeni p" name="presentation-video" allow="autoplay; fullscreen"
                src="https://player.vimeo.com/video/430445552?background=1&autoplay=1&loop=1&byline=0&title=0"
                frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
      </div>
    </Layout>
  )
}

