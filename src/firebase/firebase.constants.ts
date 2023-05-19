import {
  AuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';

export const AUTH_ROUTES = ['/sign-in', '/sign-up', '/reset-password'];
export const PROFILE_ROUTES = ['/profile', '/article'];
export const PUBLIC_ROUTES = [
  '/',
  '/about',
  '/my-work',
  '/laboratory',
  '/blog',
];

export type TFirebaseConfig = {
  [key: string]: string | undefined;
};

export const firebaseConfig: TFirebaseConfig = {
  apiKey: 'AIzaSyDaJpDlDg7yIGpYdV6gyFRR3hfb4XpIn6g',
  authDomain: 'blog-c7b06.firebaseapp.com',
  projectId: 'blog-c7b06',
  storageBucket: 'blog-c7b06.appspot.com',
  messagingSenderId: '988122052180',
  appId: '1:988122052180:web:8fc12f836daeb22ef11fc1',
  measurementId: 'G-85TH6F8R4',
};

export type TAuthProvider = {
  name: string;
  provider: AuthProvider;
  icon: string;
};

export const authProviders: TAuthProvider[] = [
  {
    name: 'facebook',
    provider: new FacebookAuthProvider(),
    icon: 'facebook/facebook-original.svg',
  },
  {
    name: 'google',
    provider: new GoogleAuthProvider(),
    icon: 'google/google-original.svg',
  },
  {
    name: 'github',
    provider: new GithubAuthProvider(),
    icon: 'github/github-original.svg',
  },
];

export const AUTH_ERROR = {
  'auth/id-token-expired': 'ID token expired',
  'auth/argument-error': 'Invalid ID token',
  'auth/id-token-revoked': 'ID token revoked',
  'app/invalid-credential': 'Invalid credential',
  'app/invalid-origin': 'Invalid origin',
};
