// Name: Whitney Turkson

var readLineSync = require('readline-sync');

console.log("=== PRIME GAP DETECTOR ===");

var n = readLineSync.questionInt("Enter a positive number (n <= 1000): ");

while (n <= 0 || n > 1000) {
    console.log("Number must be > 0 and <= 1000.");
    n = readLineSync.questionInt("Enter a positive number (n <= 1000): ");
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (var i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

var primes = [];

for (var i = 2; i <= n; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

console.log("Primes up to " + n + ": [" + primes.join(", ") + "]");

if (primes.length < 2) {
    console.log("Not enough primes to calculate gaps.");
} else {
    var largestGap = 0;
    var largestGapStart = primes[0];
    var largestGapEnd = primes[1];
    var totalGap = 0;
    var gapCount = 0;

    for (var j = 0; j < primes.length - 1; j++) {
        var gap = primes[j + 1] - primes[j];
        totalGap += gap;
        gapCount++;

        if (gap > largestGap) {
            largestGap = gap;
            largestGapStart = primes[j];
            largestGapEnd = primes[j + 1];
        }
    }

    var averageGap = totalGap / gapCount;

    console.log("The largest gap is " + largestGap + ", between " +
        largestGapStart + " and " + largestGapEnd);
    console.log("The average gap is " + averageGap.toFixed(2));
}