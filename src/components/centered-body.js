import React from "react"

export default function CenteredBody({children}) {

    return (
        <div style={{margin: `3rem auto`, maxWidth: 800, padding: `0 1rem`}}>
            {children}
        </div>
    )
}
