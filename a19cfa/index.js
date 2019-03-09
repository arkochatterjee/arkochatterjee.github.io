function login(){

  var database = firebase.database();

  var name = document.getElementById("name").value;
  var reg = document.getElementById("regNumber").value;
  var phno = document.getElementById("primaryPhone").value;
  var email = document.getElementById("email").value;
  var firstpref = document.getElementById("committee1").value;
  var secondpref = document.getElementById("committee2").value;


  writeUserData(name,reg,phno,email,firstpref,secondpref);


}

function writeUserData(name,reg,phno,email,firstpref,secondpref) {
  alert("Name : " + reg);

  firebase.database().ref('users/' + reg).set({
    name: name,
    regno: reg,
    phone: phno,
    email: email,
    firstpref : firstpref,
    secondpref : secondpref
  });
}
