import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const app = firebase.initializeApp({

apiKey: process.env.GATSBY_FIREBASE_APIKEY,
authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
databaseURL: process.env.GATSBY_FIREBASE_DATABASEURL,
projectId: process.env.GATSBY_FIREBASE_PROJECTID,
storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
appId: process.env.GATSBY_FIREBASE_APPID,

})

export const auth = app.auth()
export const db = app.firestore()
export default app

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = db.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName } = user;
    try {
      await userRef.set({
        displayName,
        email,
        balance: 0,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document: ", error);
    }
  }
  return getUserDocument(user.uid);
}

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
     const userDocument = await db.doc(`users/${uid}`).get();
    return {
    uid,
    ...userDocument.data()
  }
} catch (error) {
  console.error("Error fetching user", error);
}
}
export const balanceUpdate = async (currentUser, qty) => {
  if (!currentUser) return null;
  try {
    const increment = firebase.firestore.FieldValue.increment(qty);
    const userDocument = db.collection(`users`).doc(`${currentUser.uid}`);
    await userDocument.update({ balance: increment });
    return getUserDocument(currentUser.uid)
    }
  catch(error) {
    console.error("Error updating balance", error)
  }
}

