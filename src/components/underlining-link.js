import React from "react";
import {Link} from "gatsby"
import "../styles/underlining-button.css"


export default function UnderliningLink({children, className}) {
    return (<Link className={ `nav-item ${className}` }>{children}</Link>)
}
