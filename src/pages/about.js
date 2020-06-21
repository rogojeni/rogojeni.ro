import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CenteredBody from "../components/centered-body";

export default function About({ data }) {
  return (
    <Layout>
      <CenteredBody>
        <h1>De ce {data.site.siteMetadata.title}?</h1>
        <p>
          Prin anii ’80 ai secolului trecut, mai multe grupuri de copii făceau satul să răsune de râsetele
          lor năstrușnice când o zbugheau pe poarta școlii, după ce se terminau orele, și de strigătele lor de
          entuziasm din timpul meciurilor de fotbal organizate ad-hoc, în mijlocul vreunei ulițe. În fiecare
          an, la sfârșitul școlii, aceeași copii se adunau la Căminul Cultural, unii ca să urce pe scenă, de
          unde recitau, cântau sau dansau, iar alții ca să-i privească. Cât era vara de lungă, se scuturau de
          arșița ei aruncând-o în apele Prutului, râul care-i atrăgea ca un magnet cu aura lui misterioasă de
          graniță între aceeași țară. Iarna mergeau în grupuri mici, câte doi, câte trei, la colindat, de
          Crăciun. Apoi mergeau cu plugușorul, de Anul Nou. Se auzeau din toate părțile vocile lor... Un
          ”A-ho, a-ho!” din stânga, un ”Mânați, măi!” din dreapta, un buhai mai în depărtare...Și clopoței.
          Mulți clopoței... Cei mai mari formau două grupuri de adevărați actori, care ofereau cele două
          evenimente-vedetă ale trecerii în noul an: Jienii și Mocănașii.
          Apoi, liniște. Nu dintr-o dată, ci treptat, dar ireversibil. Unul câte unul, copiii aceia și-au
          găsit drumul în viață departe de ulițele satului pe care alergaseră desculți în tot felul de jocuri
          inventate pe loc. Școala s-a închis de mult. Serbările școlare de sfârșit de an au rămas doar în
          amintire. Precum un soldat credincios patriei sale lăsat la vatră după o viață în slujba ei, satul
          pare a se fi resemnat...
          Dar Rogojeniul și-a crescut bine copiii! Recunoscători pentru copilăria de basm oferită
          de colțul acesta de rai, ei au format asociația Alianța Rogojeni, care are ca scop declarat
          repunerea Rogojeniului pe harta evenimentelor culturale și de altă natură prin organizarea de
          activități diverse care să atragă participarea atât a localnicilor, cât și a celor din localitățile
          vecine. Reușita acestui demers nu este garantată, dar lucrul cel mai important a fost făcut: primul
          pas. De aici, nu putem merge decât înainte, iar site-ul nostru va consemna toate evenimentele
          viitoare.
        </p>
      </CenteredBody>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
