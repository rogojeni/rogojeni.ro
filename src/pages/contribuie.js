import React from "react"
import Layout from "../components/layout"
import "../styles/iframe.css"
import CenteredBody from "../components/centered-body"
import ButtonLink from "../components/button-link"

export default function Contact({ data }) {
  return (
    <Layout>
      <CenteredBody>
        <div>
          <h2>Susține Alianța</h2>
          <p>Puteți face o donație direct în contul Alianței pentru a sprijini proiectele noastre.</p>
          <p><strong>Beneficiar:</strong> Asociatia Alianta Rogojeni</p>
          <p><strong>IBAN:</strong> RO41BRDE445SV63363614450</p>
        </div>
        <div>
          <h2>Direcționează 3.5% din impozit</h2>
          <p>Redirecționați 3.5% din impozitul pe venit completând formularul 230.</p>
          <ButtonLink className="button"
                      to="https://formular230.ro/asociatia-alianta-rogojeni">
            <strong>Completează formularul</strong>
          </ButtonLink>
        </div>
      </CenteredBody>
    </Layout>
  )
}
