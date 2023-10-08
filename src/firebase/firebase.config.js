
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpfeyKHClQkwTbpkEkpptUUeXjUMqKh04",
  authDomain: "social-event-management-a24af.firebaseapp.com",
  projectId: "social-event-management-a24af",
  storageBucket: "social-event-management-a24af.appspot.com",
  messagingSenderId: "349517360464",
  appId: "1:349517360464:web:a2986572b8f29d8f1dd055"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);