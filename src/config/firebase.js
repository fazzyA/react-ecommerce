import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCRA3wtaWPH5z10XI2IIv2TW08q3deAi2M",
    authDomain: "ecommerce-8cb71.firebaseapp.com",
    projectId: "ecommerce-8cb71",
    storageBucket: "ecommerce-8cb71.appspot.com",
    messagingSenderId: "747650410331",
    appId: "1:747650410331:web:3c7a6d5453201969111c7e"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire