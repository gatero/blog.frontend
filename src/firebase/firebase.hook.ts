import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import firebase from '.';
import {
  TAuthUser,
  TResetPasswordFormData,
  TSignInWithEmailAndPasswordFormData,
  TSignInWithSocialFormData,
  TSignUpWithEmailAndPasswordFormData,
  formatAuthUser,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithSocial,
  signOut,
  signUpWithEmailAndPassword,
} from './firebase.auth';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './firebase.constants';

export type TUseAuth = {
  authUser: TAuthUser;
  signInWithEmailAndPassword: (
    formData: TSignInWithEmailAndPasswordFormData,
  ) => void;
  signUpWithEmailAndPassword: (
    formData: TSignUpWithEmailAndPasswordFormData,
  ) => void;
  signInWithSocial: (formData: TSignInWithSocialFormData) => void;
  sendPasswordResetEmail: (formData: TResetPasswordFormData) => void;
  signOut: () => void;
};

export function useAuth(): TUseAuth {
  const router = useRouter();
  const [authUser, setAuthUser] = useState<TAuthUser>(null);

  useEffect(() => {
    const hasActiveSession = Boolean(localStorage.getItem('hasActiveSession'));
    const isPrivateRoute = PRIVATE_ROUTES.includes(router.route);
    const isPublicRoute = PUBLIC_ROUTES.includes(router.route);
    const isHomeRoute = router.route === '/';

    firebase.auth.onAuthStateChanged((auth: any) => {
      try {
        if (auth && !authUser) {
          setAuthUser(formatAuthUser(auth));
        }

        if (hasActiveSession) {
          if (!isHomeRoute && isPublicRoute) {
            router.push('/');
          }
        } else {
          if (isPrivateRoute) {
            localStorage.clear();
            router.push('/sign-in');
          }
        }
      } catch (error) {
        console.log(error);
      }
    });
  }, [authUser, router]);

  const output: TUseAuth = {
    authUser,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signUpWithEmailAndPassword,
    signInWithSocial,
    signOut,
  };

  return output;
}
