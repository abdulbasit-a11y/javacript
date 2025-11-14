var a = prompt('enter your city name')
if(a ==='karachi'){
    alert('WELCOME TO CITY OF LIGHTS')
}
var a = prompt ("gender (male/female):")
if(a ==='male'){
    alert('good morning sir')
}
if(a ==='female'){
    alert('good morning mame')
}
var a =prompt("traffic signal colour")
if(a ==="red"){
alert("stop")
}
if(a === "yellow"){
    alert("getr eady")
}
if(a === "green"){
    alert("go")
}
var fuel = +prompt("enter remaining fuel (in liters):")
if(fuel < 0.25){
    alert("please refill the fuel in car ")
}
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat")
alert("car is smaller than cat");
let sub1 = +prompt("Enter marks of subject 1:");
let sub2 = +prompt("Enter marks of subject 2:");
let sub3 = +prompt("Enter marks of subject 3:");
let totalMarks = +prompt("Enter total marks:");

let obtained = sub1 + sub2 + sub3;
let percentage = (obtained / totalMarks) * 100;

let grade, remarks;

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
}
else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
}
else if (percentage >= 60) {
  grade = "B";
  remarks = "You need improvement";
}
else {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);
let a = 7;    
let b = +prompt("Guess the secret number (1 to 10):");

if (a === b) {
  alert("Bingo! Correct answer");
}

else if (a + 1 === b) {
  alert("Close enough to the correct answer");
}

else {
  alert("Wrong answer, try again!");
}
var num = +prompt("Enter a number:");

if (num % 3 === 0) {
  alert("The number is divisible by 3");
} 
else {
  alert("The number is NOT divisible by 3");
}
var num = +prompt("Enter a number:");

if (num % 2 === 0) {
  alert("The number is even");
}
else {
  alert("The number is odd");
}
var T = +prompt("Enter temperature:");

if (T > 40) {
  alert("It is too hot outside.");
}

else if (T > 30) {
  alert("The Weather today is Normal.");
}

else if (T > 20) {
  alert("Today’s Weather is cool.");
}

else if (T > 10) {
  alert("OMG! Today’s weather is so Cool.");
}

else {
  alert("It's very cold!");
}
let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");
let op = prompt("Enter operation (+, -, *, /, %):");

let result;

if (op === "+") {
  result = num1 + num2;
}

if (op === "-") {
  result = num1 - num2;
}

if (op === "*") {
  result = num1 * num2;
}

if (op === "/") {
  result = num1 / num2;
}

if (op === "%") {
  result = num1 % num2;
}

alert("Result: " + result);





    