// This function was created to pull the first name (name) and email (email) of the user - this is called by success.html file
function getValues() {
    document.getElementById("inBold").innerHTML =
      localStorage.getItem("name") + "!";
  
    document.getElementById("emailDisplay").innerHTML =
      localStorage.getItem("email");
  }