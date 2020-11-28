import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebase from "firebase";

export const config = {
  apiKey: "AIzaSyBjxu8fvzv-g7_o_uOigYRwhBvxBt3Q14Q",
  authDomain: "shop-e6864.firebaseapp.com",
  databaseURL: "https://shop-e6864.firebaseio.com",
  projectId: "shop-e6864",
  storageBucket: "shop-e6864.appspot.com",
  messagingSenderId: "796864063112",
  appId: "1:796864063112:web:90ef91f5691d6fac3ba13d",
  measurementId: "G-F7V2ZZH6B3"

  // apiKey: firebase.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    // app.initializeApp(config);

    this.auth = app.auth();
    // this.db = app.database();
  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  //     onAuthUserListener = (next, fallback) =>
  //     this.auth.onAuthStateChanged(authUser => {
  //       if (authUser) {
  //         this.user(authUser.uid)
  //           .once('value')
  //           .then(snapshot => {
  //             const dbUser = snapshot.val();
  // console.log(dbUser)
  //             // default empty roles
  //             if (!dbUser.roles) {
  //               dbUser.roles = {};
  //             }

  //             // merge auth and db user
  //             authUser = {
  //               uid: authUser.uid,
  //               email: authUser.email,
  //               emailVerified: authUser.emailVerified,
  //               providerData: authUser.providerData,
  //               ...dbUser,
  //             };

  //             next(authUser);
  //           });
  //       } else {
  //         fallback();
  //       }
  //     });
  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");
}
export const db = !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();
export default Firebase;
