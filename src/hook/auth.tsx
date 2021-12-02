import React,
{
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';
import firebase from '../config/firebase';


type AuthContextData = {
  user: string | undefined,
  singIn: (email: string, password: string) => Promise<void>
  addNewUser: (email: string, password: string) => Promise<void>
  logOut: () => Promise<void>
}
type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<string | undefined>();

  async function singIn(email: string, password: string) {
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const userData = userCredential.user?.uid;
        setUser(userData)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }


  async function addNewUser(email: string, password: string) {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  async function logOut() {
    firebase.auth().signOut().then(() => {
    }).catch((error) => { });

  }
  return (
    <AuthContext.Provider value={{
      user,
      singIn,
      addNewUser,
      logOut,
    }}>
      {children}
    </AuthContext.Provider>

  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export {
  AuthProvider,
  useAuth
}