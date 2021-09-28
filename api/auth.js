import { auth } from "~/plugins/firebase";

export const getToken = async() => {
    return new Promise((resolve) => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const token = await auth.currentUser.getIdToken(true)
          resolve(token);
        } else {
          resolve(null);
        }
      })
    })
  }
  