import React from "react"
import Layout from "../../components/layout"
import CenteredBody from "../../components/centered-body"

export default function About({ data }) {
  return (
    <Layout>
      <CenteredBody>
        <h1>Spiridon Popescu</h1>
        <p>
          (1864–1933)
          Născut în satul Rogojeni, Spiridon Popescu a fost scriitor și preot,
          cunoscut pentru sensibilitatea sa literară și apropierea de oameni.
          Prin poezie și proză cu ton moral și religios, și-a pus amprenta
          asupra culturii române de la sfârșitul secolului XIX.
          A rămas mereu legat de locul natal, pe care l-a purtat cu el în gând
          și în scris.
        </p>
      </CenteredBody>
    </Layout>
  )
}
