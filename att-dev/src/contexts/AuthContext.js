import React, { useContext, useState, useEffect } from "react"
import { auth, generateUserDocument, balanceUpdate } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function userdetails(user, { displayName }) {
    return generateUserDocument(user, { displayName })
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  function handleUpdate(qty) {
    return balanceUpdate(currentUser, qty)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth)
      setCurrentUser(user)
      
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    userdetails,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    handleUpdate,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
