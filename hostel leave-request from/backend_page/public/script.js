const firebaseConfig = {
  apiKey: "AIzaSyAzWc74eM8G7yOXpfwzB-pnIJZEq2i_TEg",
  authDomain: "hostelleaverequestform-a9fd4.firebaseapp.com",
  databaseURL: "https://hostelleaverequestform-a9fd4-default-rtdb.firebaseio.com",
  projectId: "hostelleaverequestform-a9fd4",
  storageBucket: "hostelleaverequestform-a9fd4.appspot.com",
  messagingSenderId: "905877805852",
  appId: "1:905877805852:web:3db48c86e49749bece38d9",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const loginForm = document.querySelector('#login-form');
loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  

  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password)
  .then((cred) => {

    loginForm.reset();
    window.location ="./backend.html";
 
  })
  .catch(error => {
    alert(error);
  })

});




