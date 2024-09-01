// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: 'AIzaSyCVod2rxe82kLW9DnqJUZz-hJGxsWVBvK8',
  projectId: 'ir-807cb',
  messagingSenderId: '531530616679',
  appId: '1:531530616679:android:f894da2dfcbb956f6da9c2'
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const FIRESTORE_DB = getFirestore(FIREBASE_APP);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export { FIREBASE_APP, FIRESTORE_DB, FIREBASE_AUTH };
