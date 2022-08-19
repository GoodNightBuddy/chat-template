import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FRIREBASE_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCk7WGWC7q04QbdgIRPC7ri2IlachOue4A",
  authDomain: "chat-template-a5385.firebaseapp.com",
  projectId: "chat-template-a5385",
  storageBucket: "chat-template-a5385.appspot.com",
  messagingSenderId: "1054909554798",
  appId: "1:1054909554798:web:44e2625bff40b74d53467f"
};

const app = initializeApp(firebaseConfig);
