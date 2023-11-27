function submitForm() {
    var name = document.getElementById('nameInput').value;
    var phoneNumber = document.getElementById('phoneInput').value;
    var email = document.getElementById('emailInput').value;

    alert("Name: " + name + "\nPhone Number: " + phoneNumber + "\nEmail: " + email +
    "\nWas Submitted sucessfully");
}