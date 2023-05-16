import { createContext, useContext } from 'react';
import { TUseAuth, useAuth } from './firebase.hook';

const AuthContext = createContext<TUseAuth>({
  authUser: {
    id: '',
    name: '',
    email: '',
    emailVerified: '',
    picture: '',
  },
  signInWithEmailAndPassword: () => false,
  signUpWithEmailAndPassword: () => false,
  signInWithSocial: () => false,
  sendPasswordResetEmail: () => false,
  signOut: () => false,
});

export default function AuthProvider(props: any) {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
