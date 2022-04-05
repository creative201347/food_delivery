import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBK6eJXIOqfDlzwXNSKRirM_LRC1albyp0",
  authDomain: "food-delivery-4462f.firebaseapp.com",
  databaseURL: "https://food-delivery-4462f-default-rtdb.firebaseio.com",
  projectId: "food-delivery-4462f",
  storageBucket: "food-delivery-4462f.appspot.com",
  messagingSenderId: "683461926958",
  appId: "1:683461926958:web:4cc29f27b5623a550e7fbf",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, db, storage, firestore };
