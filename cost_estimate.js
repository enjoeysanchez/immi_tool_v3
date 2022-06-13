// Get information from the Cost Estimate Form
const costEstimateForm = document.getElementById("costEstimateForm")

costEstimateForm.addEventListener("submit", function(event) {
    event.preventDefault() 

    var dependentSelector = document.getElementById("dependentSelector").value
    console.log("Traveling with dependents:", dependentSelector);

    var flightTicket = document.getElementById("flightTicket").value
    console.log("Flight Ticket price in USD:", flightTicket);

    var hotel = document.getElementById("hotel").value
    console.log("Hotel/Accommodation price in USD:", hotel);

    var compensation = document.getElementById("compensation").value
    console.log("Annual Salary in USD:", compensation);

    var bonus = document.getElementById("bonus").value
    console.log("Relocation Bonus in USD:", bonus);

    var costEstimateNotes = document.getElementById("costEstimateNotes").value
    console.log("Notes:", costEstimateNotes);

})