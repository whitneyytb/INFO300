// Name: Whitney Turkson

var readLineSync = require('readline-sync');

console.log("=== FIBONACCI FILTER ===");

var n = readLineSync.questionInt("Enter how many Fibonacci numbers to generate (> 0): ");

while (n <= 0 || isNaN(n)) {
    console.log("Number must be greater than 0.");
    n = readLineSync.questionInt("Enter how many Fibonacci numbers to generate (> 0): ");
}

var fib = [];

for (var i = 0; i < n; i++) {
    if (i === 0) {
        fib.push(0);
    } else if (i === 1) {
        fib.push(1);
    } else {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
}

console.log("Full sequence: [" + fib.join(", ") + "]");

var oddFib = [];

for (var j = 0; j < fib.length; j++) {
    if (fib[j] % 2 !== 0) {
        oddFib.push(fib[j]);
    }
}

console.log("Odd Fibonacci numbers: [" + oddFib.join(", ") + "]");
