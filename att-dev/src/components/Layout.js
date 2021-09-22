import React from "react"
import PropTypes from "prop-types"
import Footer from "./Footer"
import Header from "./Header"
import { Container} from "react-bootstrap"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"
import StyledBackgroundSection from "./BackgroundSection"


export default function Layout({ children }) {
  return (
    <>
    <GlobalStyles />
    <Typography />
  
  
        <StyledBackgroundSection>
    <Container className="fullScreen">
        <Container className="borderStyle"> 
     <Header />
    <Container className="contentStyle">
      {children}
      </Container>
      <Footer />
      </Container>
 </Container>
     
      </StyledBackgroundSection>


    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
