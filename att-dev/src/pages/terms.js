import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import TermsComp from "../components/TermsComp"
import SEO from "../components/seo"


const StyledContainer = styled.div` 
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 2rem auto;
`;

export default function TermsPage({ data }) {
  const terms = data.terms.nodes;
  return (
    <>
      <SEO title="Terms" />
      <StyledContainer>
        <TermsComp terms={terms} />
      </StyledContainer>
    </>
  )
}

export const query = graphql`
 query termsQuery {
   terms: allSanityTerms {
     nodes {
       id
       name
       para1
       para2
       para3 
       para4
       para5
       para6 
       para7
       para8
       para9 
       para10
       para11
       para12 
       para13
       para14
       para15 
       para16 
       para17 
       header1
       header2
       header3 
       header4
       header5
       header6 
       header7
       header8
       header9 
       header10
       header11
       header12 
       header13
       header14
       header15 
       header16 
       header17 
     }
   }
 }

`;