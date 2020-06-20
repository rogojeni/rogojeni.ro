import React from "react"
import Layout from "../components/layout"
import "../styles/video.css"
import "../styles/index.css"

export default function Index() {
    return (
        <Layout>
            <div className="vimeo-wrapper">
                <div className="overlay"/>
                <iframe title="alianta rogojeni" name="presentation-video" allow="autoplay; fullscreen"
                        src="https://player.vimeo.com/video/430445552?background=1&autoplay=1&loop=1&byline=0&title=0"
                        frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
            </div>
            <div className="tagline">
                <div className="static">Pentru</div>
                <div id="flip">
                    <div>
                        <div>Oameni</div>
                    </div>
                    <div>
                        <div>Povești</div>
                    </div>
                    <div>
                        <div>Viitor</div>
                    </div>
                </div>
                <div className="static">Care Contează.</div>
            </div>
        </Layout>
    )
}
