import React from "react"

import styled from "styled-components"
import PaySuccess from "../../components/PaySuccess"

const StyledContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 2rem auto;
`

export default function CompletedPage() {
  return (
    <>
      
      <StyledContainer>
        <PaySuccess />
      </StyledContainer>
    </>
  )
}