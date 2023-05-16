import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from './firebase.constants';

type TFirebase = {
  app?: any;
  auth?: any;
};

const firebase: TFirebase = {};

if (!getApps().length && !firebase.hasOwnProperty('auth')) {
  initializeApp(firebaseConfig);

  firebase.app = getApp();
  firebase.auth = getAuth();
}

export default firebase;
