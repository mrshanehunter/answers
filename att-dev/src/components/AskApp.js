import React from "react"
import { useAuth } from "../contexts/AuthContext"
import AskReject from "./AskReject"
import AskCard from "./AskCard"

export default function AskApp() {
  const { currentUser } = useAuth()

  if (currentUser.balance < 1) {
    return <AskReject />
  } else {
    return <AskCard />
  }
}
