const firebaseConfig = {
  //firebase config
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




