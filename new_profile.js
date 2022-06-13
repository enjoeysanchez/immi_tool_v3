// Get information from the New Profile form
const formProfile = document.getElementById("formProfile")

formProfile.addEventListener("submit", function(event) {
    event.preventDefault()  //Prevent AutoSubmitting the form

    var fullName = document.getElementById("fullName").value
    console.log("Full Name:", fullName);

    var idNumber = document.getElementById("idNumber").value
    console.log("ID Number:", idNumber);

    var email = document.getElementById("email").value
    console.log("Email:", email);

    var jobPosition = document.getElementById("jobPosition").value
    console.log("Job Position:", jobPosition);

    var visaType = document.getElementById("visaType").value
    console.log("Visa Type:", visaType);
    
    var expDate = document.getElementById("expDate").value
    console.log("Visa Expiration Date:", expDate);

    var i140 = document.getElementById("i140").value
    console.log("I-140 Status:", i140);

    var caseNotes = document.getElementById("caseNotes").value
    console.log("Case Notes:", caseNotes);    
})