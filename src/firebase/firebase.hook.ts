import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import firebase from '.';
import {
  TAuthUser,
  TRecoverPasswordFormData,
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
  sendPasswordResetEmail: (formData: TRecoverPasswordFormData) => void;
  signOut: () => void;
};

export function useAuth(): TUseAuth {
  const router = useRouter();
  const [authUser, setAuthUser] = useState<TAuthUser>(null);

  useEffect(() => {
    const hasActiveSession = Boolean(localStorage.getItem('hasActiveSession'));
    const isPrivateRoute = PRIVATE_ROUTES.includes(router.route);
    const isPublicRoute = PUBLIC_ROUTES.includes(router.route);

    firebase.auth.onAuthStateChanged((auth: any) => {
      if (auth && !authUser) {
        setAuthUser(formatAuthUser(auth));
      }

      if (hasActiveSession) {
        if (isPublicRoute) {
          router.push('/');
        }
      } else {
        if (isPrivateRoute) {
          localStorage.clear();
          router.push('/sign-in');
        }
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
