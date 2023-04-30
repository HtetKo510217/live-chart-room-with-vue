import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBr3vEHPOoNCk6bsVjtcWVDHPEMWvppwWQ",
    authDomain: "live-chart-bd665.firebaseapp.com",
    projectId: "live-chart-bd665",
    storageBucket: "live-chart-bd665.appspot.com",
    messagingSenderId: "633988931150",
    appId: "1:633988931150:web:50e397e32c3d659a2f2d1f",
    measurementId: "G-R32Z0SBM82"
  };

  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,auth};
