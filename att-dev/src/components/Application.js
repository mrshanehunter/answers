import React from "react"
import SignUp from "../components/SignUp"
import { Container } from "react-bootstrap"
import { Router } from "@reach/router"
import Profile from "./Profile"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import ForgotPassword from "../components/ForgotPassword"
import UpdateProfile from "../components/UpdateProfile"
import Layout from "../components/Layout"
import FirstCheckout from "../components/FirstCheckout"
import PaySuccess from "../components/PaySuccess"
import PayReject from "../components/PayReject"
import AskApp from "../components/AskApp"
import AskAnswer from "../components/AskAnswer"
import AskReject from "../components/AskReject"

export default function Application(props) {
  
   
 






  return (
    <Layout>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "90%" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <PrivateRoute path="/app/profile/" component={Profile} />
            <PrivateRoute
              path="/app/update-profile"
              component={UpdateProfile}
            />
            <PrivateRoute
              path="/app/first-checkout"
              component={FirstCheckout}
            />
            <PrivateRoute path="/app/pay-success" component={PaySuccess} />
            <PrivateRoute path="/app/pay-reject" component={PayReject} />
            <PrivateRoute path="/app/ask-app" component={AskApp} props={props} />
            <PrivateRoute path="/app/ask-answer" component={AskAnswer} props={props} />
            <PrivateRoute path="/app/ask-balance" component={AskReject} props={props} />
            <SignUp path="/app/signup" />
            <Login path="/app" />
            <ForgotPassword path="/app/forgot-password" />
          </Router>
        </div>
      </Container>
    </Layout>
  )
}
