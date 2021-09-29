import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Seo from "../components/Seo"

import PrivacyComp from "../components/PrivacyComp"

const StyledContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 2rem auto;
`

export default function PrivacyPage({ data }) {
  const privacys = data.privacys.nodes
  return (
    <>
      <Seo title="Privacy" />
      <StyledContainer>
        <PrivacyComp privacys={privacys} />
      </StyledContainer>
    </>
  )
}

export const query = graphql`
  query privacysQuery {
    privacys: allSanityPrivacys {
      nodes {
        id
        name
        openpara
        updated
        para1
        para2
        para3
        para4
        para5
        para6
        para7
        para8
        header1
        header2
        header3
        header4
        header5
        header6
        header7
        header8
      }
    }
  }
`
