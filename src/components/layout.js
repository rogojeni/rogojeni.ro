import React, {useState, useEffect} from "react"
import {Link} from "gatsby"
import logo from "../images/banner.png"
import "../styles/layout.css"
import UnderliningLink from "./underlining-link"
import SEO from "./seo"

export default function Layout({children, title, description, image}) {
    const [open, setOpen] = useState(false)

    // Close menu when route changes
    useEffect(() => {
        setOpen(false)
    }, [])

    // Handle keyboard accessibility
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            setOpen(!open)
        }
    }

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (open && !e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
                setOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [open])

    return (
        <div>
            <SEO title={title} description={description} image={image} />
            <nav>
                <div className="logo">
                    <Link to={`/`}>
                        <img 
                            src={logo}
                            alt="Alianța Rogojeni Logo"
                        />
                    </Link>
                </div>
                <div 
                    role="button" 
                    tabIndex={0} 
                    className={`hamburger ${open ? "open" : ""}`}
                    onClick={() => setOpen(!open)} 
                    onKeyPress={handleKeyPress}
                    aria-label="Menu"
                    aria-expanded={open}
                >
                    <div/>
                </div>
                <ul className={`nav-links ${open ? "open" : ""}`}>
                    <UnderliningLink className={`${open ? "fade" : ""}`} to={`/home`}>
                        Acasă
                    </UnderliningLink>
                    <UnderliningLink className={`${open ? "fade" : ""}`} to={`/about`}>
                        Despre noi
                    </UnderliningLink>
                    <UnderliningLink className={`${open ? "fade" : ""}`} to={`/gallery`}>
                        Galerie Media
                    </UnderliningLink>
                    <UnderliningLink className={`${open ? "fade" : ""}`} to={`/contact`}>
                        Contact
                    </UnderliningLink>
                    <UnderliningLink className={`${open ? "fade" : ""}`} to={`/contribuie`}>
                        Contribuie
                    </UnderliningLink>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    )
}
