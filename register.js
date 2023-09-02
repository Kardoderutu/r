const firebaseConfig = {
  apiKey: "AIzaSyD1VkCM9MGuyQih9XssCa7NZ5XfhYxJ87s",
  authDomain: "rudra-266de.firebaseapp.com",
  databaseURL: "https://rudra-266de-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rudra-266de",
  storageBucket: "rudra-266de.appspot.com",
  messagingSenderId: "711832135057",
  appId: "1:711832135057:web:3d325bee478959120ba630",
  measurementId: "G-EWVVYHPDBS"
  //   copy your firebase config informations
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
