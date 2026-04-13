var readLineSync = require('readline-sync');

console.log("=== PAYROLL SYSTEM ===");

var employees = [];
var numberOfEmployees = 3;

for (var i = 0; i < numberOfEmployees; i++) {

    console.log("\nEntering information for Employee #" + (i + 1));

    var employeeName = readLineSync.question("Employee name: ");
    while (employeeName.trim() === "") {
        console.log("Name cannot be blank.");
        employeeName = readLineSync.question("Employee name: ");
    }

    var hourlyWage = readLineSync.questionFloat("Hourly wage: ");
    while (hourlyWage <= 0 || isNaN(hourlyWage)) {
        console.log("Wage must be a positive number.");
        hourlyWage = readLineSync.questionFloat("Hourly wage: ");
    }

    var hoursWorked = readLineSync.questionFloat("Hours worked (0–80): ");
    while (hoursWorked < 0 || hoursWorked > 80 || isNaN(hoursWorked)) {
        console.log("Hours must be between 0 and 80.");
        hoursWorked = readLineSync.questionFloat("Hours worked (0–80): ");
    }

    var regularHours = hoursWorked > 40 ? 40 : hoursWorked;
    var overtimeHours = hoursWorked > 40 ? hoursWorked - 40 : 0;

    var regularPay = regularHours * hourlyWage;
    var overtimePay = overtimeHours * hourlyWage * 1.5;
    var totalPay = regularPay + overtimePay;

    employees.push({
        name: employeeName,
        hours: hoursWorked,
        regularPay: regularPay,
        overtimePay: overtimePay,
        totalPay: totalPay
    });
}

var highestPaid = employees[0];
for (var j = 0; j < employees.length; j++) {
    if (employees[j].totalPay > highestPaid.totalPay) {
        highestPaid = employees[j];
    }
}

console.log("\n=== PAYROLL REPORT ===");

for (var k = 0; k < employees.length; k++) {
    var emp = employees[k];

    console.log("\n---------------------------");
    console.log("Name: " + emp.name);
    console.log("Total Hours: " + emp.hours);
    console.log("Regular Pay: $" + emp.regularPay.toFixed(2));
    console.log("Overtime Pay: $" + emp.overtimePay.toFixed(2));
    console.log("Total Pay: $" + emp.totalPay.toFixed(2));

    if (emp.name === highestPaid.name) {
        console.log("*** HIGHEST PAID EMPLOYEE ***");
    }
}

console.log("---------------------------");
// updated formatting
