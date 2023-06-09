import {
  signOut as $signOut,
  AuthProvider,
  User,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  inMemoryPersistence,
  sendEmailVerification,
  sendPasswordResetEmail as sendResetEmail,
  setPersistence,
  signInWithPopup,
  signInWithEmailAndPassword as withEmailAndPassword,
} from 'firebase/auth';
import firebase from '.';

export type TAuthUser = {
  id: string;
  name: string;
  picture: string;
  email: string;
  emailVerified: string;
} | null;

export const formatAuthUser = (authUser: any): TAuthUser => ({
  id: authUser.uid,
  name: authUser.displayName,
  email: authUser.email,
  picture: authUser.photoURL,
  emailVerified: authUser.emailVerified,
});

export type TSignInWithEmailAndPasswordFormData = {
  rememberMe: boolean;
  email: string;
  password: string;
};

export const signInWithEmailAndPassword = async (
  formData: TSignInWithEmailAndPasswordFormData,
) => {
  try {
    const { rememberMe, email, password } = formData;
    const hasActiveSession = Boolean(localStorage.getItem('hasActiveSession'));

    const persitence = rememberMe
      ? browserSessionPersistence
      : inMemoryPersistence;

    await setPersistence(firebase.auth, persitence);
    await withEmailAndPassword(firebase.auth, email, password);

    const user = firebase.auth?.currentUser as User;
    if (user && !hasActiveSession) {
      const idToken = await user.getIdToken();

      localStorage.setItem('hasActiveSession', 'true');
      localStorage.setItem('idToken', idToken);
    }

    return user.toJSON();
  } catch (error: any) {
    return error.code;
  }
};

export type TSignInWithSocialFormData = {
  provider: AuthProvider;
};

export const signInWithSocial = async (formData: TSignInWithSocialFormData) => {
  try {
    const { provider } = formData;
    const hasActiveSession = Boolean(localStorage.getItem('hasActiveSession'));

    await setPersistence(firebase.auth, browserSessionPersistence);
    await signInWithPopup(firebase.auth, provider);

    const user = firebase.auth?.currentUser as User;
    if (user && !hasActiveSession) {
      const idToken = await user.getIdToken();

      localStorage.setItem('hasActiveSession', 'true');
      localStorage.setItem('idToken', idToken);
    }

    return user.toJSON();
  } catch (error: any) {
    return error.code;
  }
};

export type TSignUpWithEmailAndPasswordFormData = {
  name: string;
  birthdate: string;
  gender: string;
  email: string;
  password: string;
  repassword: string;
};

export const signUpWithEmailAndPassword = async (
  formData: TSignUpWithEmailAndPasswordFormData,
) => {
  try {
    const { email, password } = formData;
    const hasActiveSession = Boolean(localStorage.getItem('hasActiveSession'));

    await createUserWithEmailAndPassword(firebase.auth, email, password);

    const user = firebase.auth?.currentUser as User;
    if (user && !hasActiveSession) {
      const idToken = await user.getIdToken();

      localStorage.setItem('hasActiveSession', 'true');
      localStorage.setItem('idToken', idToken);
    }

    await sendEmailVerification(user);
  } catch (error: any) {
    return error.code;
  }
};

export type TResetPasswordFormData = {
  email: string;
};

export const sendPasswordResetEmail = async (
  formData: TResetPasswordFormData,
) => {
  const { email } = formData;

  try {
    await sendResetEmail(firebase.auth, email);
  } catch (error: any) {
    return error.code;
  }
};

export const signOut = async () => {
  try {
    $signOut(firebase.auth);
    localStorage.clear();
  } catch (error: any) {
    console.log('aaa - error: ', error);
    return error.code;
  }
};
