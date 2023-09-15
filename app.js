//Unique Firebase Object
const firebaseConfig = {
    apiKey: "AIzaSyBgXvSymZvehn1OYhV6CwLs0t85n2s_FHU",
    authDomain: "cloudform-95937.firebaseapp.com",
    projectId: "cloudform-95937",
    storageBucket: "cloudform-95937.appspot.com",
    messagingSenderId: "990828794254",
    appId: "1:990828794254:web:f97c4893201a72d81354df"
  };
  
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  //Variable to access database collection
  const db = firestore.collection("formdata");
  
  //Get Submit Form
  let submitButton = document.getElementById("submit");
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault();
  
    //Get Form Values
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let country = document.getElementById("country").value;
  
   
    //Save Form Data To Firebase
    db.doc()
      .set({
        fname: firstName,
        lname: lastName,
        country: country,
      }).then( () => { 
        console.log("data saved")
      }).catch((error) => {
        console.error(error);
      });
  
    //alert
    alert("Your Form Has Been Submitted Successfully");
  
    //clear form after submission
    function clearForm() {
      document.getElementById("clearFrom").reset();
    }
    clearForm()
  });