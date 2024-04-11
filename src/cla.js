function calculateTax() {
    var income = parseFloat(document.getElementById("income").value);
    var extraIncome = parseFloat(document.getElementById("extraIncome").value);
    var age = parseInt(document.getElementById("age").value);
    var deductions = parseFloat(document.getElementById("deductions").value);

    var overallIncome = income + extraIncome - deductions;
    var tax = 0;

    if (overallIncome <= 800000) {
        tax = 0;
    } else {
        var taxableAmount = overallIncome - 800000;
        if (age < 40) {
            tax = 0.3 * taxableAmount;
        } else if (age >= 40 && age < 60) {
            tax = 0.4 * taxableAmount;
        } else {
            tax = 0.1 * taxableAmount;
        }
    }

    var finalIncome = overallIncome - tax;
    var message = "Your overall income after tax: " + finalIncome.toFixed(2) + " Lakhs";

    // Display result in a prompt
    window.alert(message, "Close");
}
