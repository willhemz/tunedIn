import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE as string,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN as string,
  projectId: import.meta.env.PROJECT_ID as string,
  storageBucket: import.meta.env.STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID as string,
  appId: import.meta.env.APP_ID as string,
};

const app = initializeApp(firebaseConfig);
