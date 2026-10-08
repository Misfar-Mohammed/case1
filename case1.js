// Case 1 — Student Score Analysis

// Given data
const studentName = "Andi";
const assignment = 80;
const midterm = 75;
const finalExam = 90;

// 1. Calculate final score based on specified weights (Assignment 30%, Midterm 30%, Final Exam 40%)
const finalScore = (assignment * 0.30) + (midterm * 0.30) + (finalExam * 0.40);

// 2. Determine status (Pass score is >= 70) using ternary operator
const status = finalScore >= 70 ? "Passed" : "Failed";

// 3. Determine category using ternary operator
// >= 85 -> "Excellent", >= 70 -> "Good", < 70 -> "Failed"
const category = finalScore >= 85 ? "Excellent" : (finalScore >= 70 ? "Good" : "Failed");

// 4. Display result using template literal
console.log(`Student: ${studentName}
Assignment: ${assignment}
Midterm: ${midterm}
Final Exam: ${finalExam}
Final Score: ${finalScore}
Status: ${status}
Category: ${category}`);
