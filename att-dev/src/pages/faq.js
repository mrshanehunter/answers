import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import FAQComp from "../components/FAQComp"
import SEO from "../components/SEO"

const StyledContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 2rem auto;
`

export default function FAQPage({ data }) {
  const faqs = data.answers.nodes

  return (
    <>
      <SEO title="FAQ" />
      <StyledContainer>
        <FAQComp faqs={faqs} />
      </StyledContainer>
    </>
  )
}

export const query = graphql`
  query answersFaqsQuery {
    answers: allSanityAnswersFaqs(sort: { fields: event_key }) {
      nodes {
        id
        question
        answer
        event_key
      }
    }
  }
`
