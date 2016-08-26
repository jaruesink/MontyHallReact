import firebase from 'firebase';

try {
  let config = {
      apiKey: "AIzaSyBOlWSvPeZuM-U5Zc6SbIu4bS-NbNNhvJc",
      authDomain: "fir-app-8f3ba.firebaseapp.com",
      databaseURL: "https://fir-app-8f3ba.firebaseio.com",
      storageBucket: "fir-app-8f3ba.appspot.com",
    };
  firebase.initializeApp(config);
}
catch (error) {
  console.log('error initializing firebase app', error);
}

export const firebaseRef = firebase.database().ref();
export const tasksRef = firebaseRef.child('tasks');

export default firebase;