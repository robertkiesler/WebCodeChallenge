
// Creating an alert message
var alertMsg = "";
// Once the "Sign Up" button is clicked, and the validateInputs function below passes all checks, the program will execute the success.html file
document.getElementById("btnSignUp").addEventListener("click", function () {
  alertMsg = "";

  if (validateInputs()) {
    localStorage.setItem("name", document.getElementById("fName").value);
    localStorage.setItem("email", document.getElementById("email").value);

    window.location.href = "success.html";
  } else {
    alert(alertMsg);
  }
});
// Checking for various validation inputs related to name, email, and password - all must pass to proceed.
function validateInputs() {
  var isOk = true;

  if (
    document.getElementById("fName") === null ||
    document.getElementById("fName").value.length <= 0
  ) {
    alertMsg += "First Name cannot be blank\n";
    isOk = false;
  }

  if (
    document.getElementById("email") === null ||
    document.getElementById("email").value.length <= 0
  ) {
    alertMsg += "Email is mandatory\n";
    isOk = false;
  } else {
    var emailValid = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,5}$/.test(
      document.getElementById("email").value
    );

    if (!emailValid) {
      console.log("reached gere");
      alertMsg += "Invalid email format\n";
      isOk = false;
    }
  }

  if (
    document.getElementById("pass") === null ||
    document.getElementById("pass").value.length <= 0
  ) {
    alertMsg += "Password cannot be blank\n";
    isOk = false;
  }

  return isOk;
}