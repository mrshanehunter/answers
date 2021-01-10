import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebase"

export default function handleConfirm(qty) {
  const [loading, setLoading] = useState(loading)

  const { currentUser } = useAuth()
  const uid = currentUser.uid
  try {
    const userDoc = db.doc(`users/${uid}`).get()
    userDoc.update({
      balance: db.FieldValue.increment(qty),
    })
  } catch (error) {
    console.error("Error updating balance", error)
  }
  setLoading(!loading)
}
