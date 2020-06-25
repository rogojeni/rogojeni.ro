import React, {useState} from "react"
import {Link} from "gatsby"
import "../styles/layout.css"
import logo from "../images/banner.png"
import UnderliningLink from "./underlining-link";

export default function Layout({children}) {
    const [open, toggleMenu] = useState(false)

    const keyPressed = () => {
    }

    return (
        <div>
            <nav>
                <div className="logo">
                    <Link to={`/`}>
                        <img src={logo} alt="Logo"/>
                    </Link>
                </div>
                <div role="button" tabIndex={0} className={`hamburger ${open ? "open" : ""}`}
                     onClick={() => toggleMenu(!open)} onKeyPress={keyPressed}>
                    <div/>
                </div>
                <ul className={`nav-links ${open ? "open" : ""}`}>
                    <UnderliningLink className={`${open ? "fade" : ""}`} to={`/home`}>
                        Acasă
                    </UnderliningLink>
                    <UnderliningLink className={`${open ? "fade" : ""}`} to={`/about/`}>
                        Despre noi
                    </UnderliningLink>
                    <UnderliningLink className={`${open ? "fade" : ""}`} to={`/gallery/`}>
                        Galerie Media
                    </UnderliningLink>
                    <UnderliningLink className={`${open ? "fade" : ""}`} to={`/contact/`}>
                        Contact
                    </UnderliningLink>
                </ul>
            </nav>
            {children}
        </div>
    )
}
