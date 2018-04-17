
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDdoeRsMjY9B6_AF5HmGLh-fCk04t8B4Pc",
  authDomain: "chat-6353c.firebaseapp.com",
  databaseURL: "https://chat-6353c.firebaseio.com",
  projectId: "chat-6353c",
  storageBucket: "chat-6353c.appspot.com",
  messagingSenderId: "528410261324"
};

firebase.initializeApp(config);

const messagesCollection = firebase.firestore().collection('messages');

export const db = {
  currentUser: null,
  sendChatMessage(message) {
    messagesCollection.add({
      createdOn: new Date(),
      author: store.currentUser,
      message
    });
  }
};

firebase.auth().onAuthStateChanged((user) => {
  db.currentUser = user;
});
