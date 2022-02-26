

const firstName = document.getElementById("fname");
const emailAddress = document.getElementById("email");
const userPassword = document.getElementById("pwd");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    let messages = []
    if (firstName.value === '' || firstName.value == null) {
        messages.push("Name is Required")
    }

    if (emailAddress.value === '' || emailAddress.value == null) {
        messages.push("Email is Required")
    }

    if(userPassword.value.length <= 6) {
        messages.push("Password must be greater than 6 characters long.")
    }

    if(userPassword.value.length > 20) {
        messages.push("Password must be less than 20 characters long.")
    }

    if(userPassword.value === 'password') {
        messages.push("Password cannot be password")
    }

    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }

    if (messages.length === 0) {

            var newLine = "\r\n";
            var msg = "Welcome, "
            msg += newLine;
            msg += firstName.value + "!";
            msg += newLine;
            msg += newLine;
            msg += "You have been registered for this awesome service."
            msg += newLine;
            msg += "Please check your email listed below for instructions."
            msg += newLine;
            msg += newLine;
            msg += emailAddress.value;

        alert(msg)

        
        //document.getElementById("myButton").onclick = function() {
          //  var newLine = "\r\n";
            //var msg = "Welcome, "
            //msg += newLine;
            //msg += firstName.value + "!";
            //msg += newLine;
            //msg += newLine;
            //msg += "You have been registered for this awesome service."
            //msg += newLine;
            //msg += "Please check your email listed below for instructions."
            //msg += newLine;
            //msg += newLine;
            //msg += emailAddress.value;
            //swal(msg, {
                //button: "Sign In"
            //})
            
        
        //}
    
    }
    

})







