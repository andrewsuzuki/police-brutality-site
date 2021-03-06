import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SelectCity from "../components/select-city"
import SelectState from "../components/select-state"
import IncidentListing from "../components/incident-listing"
import { Blurb } from "./about"

const IndexPage = ({ data: { allPbIncident } }) => (
  <Layout>
    <SEO title="Home" />
    <div className="false-hero">
      <Blurb />
    </div>
    <h2>Latest Incidents</h2>
    <div className="level">
      <div className="level-left">
        <div className="level-item">
          By city:&nbsp;
          <SelectCity />
        </div>
        <div className="level-item">
          By state:&nbsp;
          <SelectState />
        </div>
      </div>
    </div>
    <br />
    {allPbIncident.edges.map(({ node }) => (
      <IncidentListing incident={node} key={node.id} />
    ))}
  </Layout>
)

export default IndexPage

// NOTE doesn't include incidents with null dates
export const query = graphql`
  query {
    allPbIncident(
      limit: 20
      filter: { date: { ne: null } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id
          name
          slug
          links
          date
          edit_at
          state {
            id
            name
            slug
          }
          city {
            id
            name
            slug
          }
        }
      }
    }
  }
`
