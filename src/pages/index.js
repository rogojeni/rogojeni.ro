import React from "react"
import Layout from "../components/layout"
import "../styles/video.css"
import "../styles/index.css"
import UnderliningLink from "../components/underlining-link";

export default function Index() {
    return (
        <Layout>
            <div className="vimeo-wrapper">
                <div className="overlay"/>
                <iframe title="alianta rogojeni" name="presentation-video" allow="autoplay; fullscreen"
                        src="https://player.vimeo.com/video/430445552?background=1&autoplay=1&loop=1&byline=0&title=0"
                        webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
            </div>
            <div className="tagline">
                <UnderliningLink className="static" to={`/contribuie`}>Contribuie</UnderliningLink>
                <div className="static">pentru</div>
                <div id="flip">
                    <div>
                        <div>oameni</div>
                    </div>
                    <div>
                        <div>povești</div>
                    </div>
                    <div>
                        <div>un viitor</div>
                    </div>
                </div>
                <div className="static">care contează.</div>
            </div>
        </Layout>
    )
}
