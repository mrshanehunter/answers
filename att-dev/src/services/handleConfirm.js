import React from "react"
import { useAuth } from "../contexts/AuthContext"
import { db } from "../firebase"

export default async function handleConfirm({ pack }) {
  const { currentUser } = useAuth()
  const uid = currentUser.uid
  try {
    const userDoc = await db.doc(`users/${uid}`).get();
    if (pack.welcome_offer === true) {
      userDoc.update({
        balance: db.FieldValue.increment(pack.pack_token_qty * 2)
      });
    } else if (pack.welcome_offer !== true) {
      userDoc.update({
        balance: db.FieldValue.increment(pack.pack_token_qty)
      });
    }
  } catch(error) {
      console.error("Error updating balance" , error)
  }
}

