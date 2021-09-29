import { auth } from "~/plugins/firebase";
import api from './api';


export const getSignUp = async (data) => {
  const response = await api.post("sign-up", data);
  return response.data; 
}

export const getCurrentUser = async () => {
  const token = await getToken();
  const request = await api.get("/current-user", { headers: { Authorization: token } });
  const data = request.data; 
  return data; 
};


export const loginFirebase = async (email, password) => {
  await auth.setPersistence("local");
        await auth.signInWithEmailAndPassword(
          email,
          `${password}`
  );
}

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
  