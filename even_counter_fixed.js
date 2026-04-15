// Name: Whitney Turkson

// Fixed: use require with same variable name as used below
var readlineSync = require('readline-sync');

// Fixed: convert input to integers so the loop works numerically
var start = readlineSync.questionInt("Enter start number: ");
var end = readlineSync.questionInt("Enter end number: ");

// Fixed: initialize count correctly
var count = 0;

// Fixed: ensure loop works with numeric values
for (var i = start; i <= end; i++) {
    // Fixed: use moduloe operator to test even numbers in range
    if (i % 2 === 0) {
        // Fixed: use += instead of =+ to increment count
        count += 1;
    }
}

console.log("Even numbers between " + start + " and " + end + ": " + count);
