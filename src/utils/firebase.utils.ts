import firebase from 'firebase'
import 'firebase/database'

export const firebaseConfig = {
  apiKey: 'AIzaSyDqmW75GQN9xp1Tr7B9STMGdewYU0NGBos',
  authDomain: 'andrew-todo.firebaseapp.com',
  databaseURL: 'https://andrew-todo-default-rtdb.firebaseio.com',
  projectId: 'andrew-todo',
  storageBucket: 'andrew-todo.appspot.com',
  messagingSenderId: '185322962690',
  appId: '1:185322962690:web:4428a1dcc9c7c740a98c1b',
  measurementId: 'G-S34QM7K9ZQ',
}

firebase.initializeApp(firebaseConfig)

export const dbRef = firebase.database().ref()

export default firebase
