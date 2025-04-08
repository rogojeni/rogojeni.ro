import React from "react"
import Layout from "../../components/layout"
import CenteredBody from "../../components/centered-body"

export default function About({ data }) {
  return (
    <Layout>
      <CenteredBody>
        <h1>Pârâul Horincea</h1>
        <p>
          Pârâul Horincea traversează satul Rogojeni, aducând viață și echilibru
          acestui colț de natură din județul Galați. Cu izvoare ce coboară din
          Podișul Covurlui, pârâul străbate dealurile domoale ale zonei și
          alimentează peisajele locale cu apă, vegetație și liniște.
          De-a lungul vremii, a fost martor tăcut la viața satului – sursă de apă,
          de povești și de continuitate.
        </p>
      </CenteredBody>
    </Layout>
  )
}
