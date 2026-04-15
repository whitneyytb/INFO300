// Name: Whitney Turkson

var readLineSync = require('readline-sync');

console.log("=== LETTER FREQUENCY & FIRST REPEAT ===");

var input = readLineSync.question("Enter a string: ");

var lower = input.toLowerCase();
var freq = {};
var order = [];
var firstRepeat = null;

for (var i = 0; i < lower.length; i++) {
    var ch = lower.charAt(i);

    if (ch >= 'a' && ch <= 'z') {
        if (!freq[ch]) {
            freq[ch] = 1;
            order.push(ch);
        } else {
            freq[ch] = freq[ch] + 1;
            if (firstRepeat === null) {
                firstRepeat = ch;
            }
        }
    }
}

console.log("Letter frequencies:");

for (var j = 0; j < order.length; j++) {
    var letter = order[j];
    console.log(letter + ": " + freq[letter]);
}

if (firstRepeat !== null) {
    console.log("First repeated letter: " + firstRepeat);
} else {
    console.log("First repeated letter: none");
}
