import firebase from 'firebase/app';
import firebaseAuth from 'firebase/auth';
import firebaseDatabase from 'firebase/database';

const config = {
  apiKey: 'AIzaSyDczHhQN3KxbDgro_MoYFD3RcakuhIMRwE',
  authDomain: 'my-taskmanager.firebaseapp.com',
  databaseURL: 'https://my-taskmanager.firebaseio.com',
  projectId: 'my-taskmanager',
  storageBucket: 'my-taskmanager.appspot.com',
  messagingSenderId: '682050800286'
};

firebase.initializeApp(config);

export { firebase, firebaseAuth, firebaseDatabase };
