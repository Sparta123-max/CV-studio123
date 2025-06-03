
const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "./new.html"
    }else{
        alert("wrong")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "trncongvinh@gmail.com" && password === "qdcl1978"){
        return true
    }else{
        return false
    }
}










(function () {
  console.log("Start file login with firebase");
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB2P5IXOSxwVPz9BKka5Z_VAHwO8f_woGY",
    authDomain: "test-7a841.firebaseapp.com",
    projectId: "test-7a841",
    storageBucket: "test-7a841.appspot.com",
    messagingSenderId: "174808059664",
    appId: "1:174808059664:web:056a7e95c67a8742041f95",
    measurementId: "G-P214QPV3MY",
  };
  firebase.initializeApp(config);
  // var database = firebase.database();

  //Google singin provider
  var ggProvider = new firebase.auth.GoogleAuthProvider();
  //Facebook singin provider
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  //Login in variables
  const btnGoogle = document.getElementById("btnGoogle");
  const btnFaceBook = document.getElementById("btnFacebook");

  //Sing in with Google
  btnGoogle
    .addEventListener("click", (e) => {
      firebase
        .auth()
        .signInWithPopup(ggProvider)
        .then(function (result) {
          var token = result.credential.accessToken;
          var user = result.user;
          console.log("User>>Goole>>>>", user);

          // document.querySelector(".display_name").textContent = user.displayName;
          // document.querySelector(".email").textContent = user.email;
          // document.querySelector(".avatar").src = user.photoURL;
          // const dataUser = {

          //     name: user.displayName,
          //     email: user.email,
          //     avatar: user.photoURL,
          // };
          // console.log(dataUser);
          // localStorage.setItem("user", JSON.stringify(dataUser));
          window.location.href = "../new.html";
        });
    })
    .catch(function (error) {
      console.error("Error: hande error here>>>", error.code);
    });
})();
