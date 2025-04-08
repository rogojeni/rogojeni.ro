import React from "react";
import {Link} from "gatsby"
import "../styles/button.css"


export default function ButtonLink({children, className, to}) {
    return (<a className={`${className}`} href={to}>{children}</a>)
}
