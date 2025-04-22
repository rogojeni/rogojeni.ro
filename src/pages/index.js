import React from "react"
import Layout from "../components/layout"
import "../styles/index.css"
import UnderliningLink from "../components/underlining-link"
import BackgroundVideo from "../components/background-video"

export default function Index() {
    return (
        <Layout
            title="Bine ați venit"
            description="Alianța Rogojeni - O inițiativă comunitară pentru dezvoltarea și promovarea valorilor locale"
        >
            <BackgroundVideo />
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
