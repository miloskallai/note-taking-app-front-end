import firebase from 'firebase';
const apiKey = process.env.FIREBASE_API_KEY;

const config = {
  apiKey,
  authDomain: 'notes-93b69.firebaseapp.com',
  databaseURL: 'https://notes-93b69.firebaseio.com',
  projectId: 'notes-93b69',
  storageBucket: 'notes-93b69.appspot.com',
  messagingSenderId: '73758110097'
};
firebase.initializeApp(config);

export default firebase;
