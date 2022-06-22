// Validar Formulario
function validateSubmit() {
    //Validar Nombre
    if (document.contactform.name.value.length == 0) {
        alert("Please enter your full name.")
        document.contactform.name.value.focus()
        return 0;
    }

    if (document.contactform.idnumber.value.length !== 7) {
        alert("Please enter a valid ID Number (7 Digits)")
        document.contactform.idnumber.value.focus()
        return 0;
    }

    if (document.contactform.email.value.length == 0) {
        alert("Please enter a valid email address.")
        document.contactform.email.value.focus()
        return 0;
    }

    if (document.contactform.message.value.length < 10) {
        alert("Please type your message and describe all the details related to your concern.")
        document.contactform.message.value.focus()
        return 0;
    }

    alert("Thank you! Your message has been received.");
    document.contactform.sendButton.submit();
}

// Tomar la info de la form
const formProfile = document.getElementById("contactform")

formProfile.addEventListener("submit", function(event) {
    event.preventDefault()

    var fullName = document.getElementById("name").value
    console.log("Full Name:", fullName);

    var idNumber = document.getElementById("idnumber").value
    console.log("ID Number:", idNumber);

    var email = document.getElementById("email").value
    console.log("Email:", email);

    var messageBox = document.getElementById("message").value
    console.log("Message:", messageBox);    
})