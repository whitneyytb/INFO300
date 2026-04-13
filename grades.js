var readLineSync = require('readline-sync');

console.log("=== GRADE FORECAST SIMULATOR ===");

var currentAverage = readLineSync.questionFloat("Enter your current course average: ");
while (currentAverage < 0 || currentAverage > 100 || isNaN(currentAverage)) {
    console.log("Average must be between 0 and 100.");
    currentAverage = readLineSync.questionFloat("Enter your current course average: ");
}

var scores = [];
var userInput = "";

console.log("\nEnter hypothetical final exam scores.");
console.log("Type 'done' when finished.\n");

while (userInput !== "done") {
    userInput = readLineSync.question("Final exam score: ").toLowerCase();

    if (userInput === "done") {
        break;
    }

    var score = parseFloat(userInput);

    if (score < 0 || score > 100 || isNaN(score)) {
        console.log("Score must be between 0 and 100.");
    } else {
        scores.push(score);
    }
}

function getLetterGrade(avg) {
    if (avg > 89.5) {
        return "A";
    } else if (avg > 79.5) {
        return "B";
    } else if (avg > 69.5) {
        return "C";
    } else if (avg > 59.5) {
        return "D";
    } else {
        return "F";
    }
}

console.log("\n=== FORECAST RESULTS ===");

for (var i = 0; i < scores.length; i++) {
    var finalExamScore = scores[i];

    var finalCourseAverage = (currentAverage * 0.75) + (finalExamScore * 0.25);
    var letter = getLetterGrade(finalCourseAverage);

    var status = "";
    if (finalCourseAverage > currentAverage) {
        status = "Improved";
    } else if (finalCourseAverage < currentAverage) {
        status = "Declined";
    } else {
        status = "Stayed the same";
    }

    console.log("\n---------------------------");
    console.log("Final Exam Score: " + finalExamScore);
    console.log("Final Course Average: " + finalCourseAverage.toFixed(2));
    console.log("Letter Grade: " + letter);
    console.log("Status: " + status);
}

console.log("---------------------------");
small changes for the grades
