// Form Validation
function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var website = document.getElementById("website").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error");
    var text;

    if (name.length === 0) {
        text = "Please Enter Valid Name";
        error.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Valid Email";
        error.innerHTML = text;
        return false;
    }

    if (isNaN(phone) || phone.length != 10) {
        text = "Please Enter Valid Phone Number";
        error.innerHTML = text;
        return false;
    }

    if (message.length < 20) {
        text = "Please Enter Valid Message";
        error.innerHTML = text;
        return false;
    }

    return true;
}
