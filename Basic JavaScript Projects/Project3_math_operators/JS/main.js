// To perform addition with JavaScript and display the result
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition; //Print the result in HTML
}

//To perform subtraction, we write the following JavaScript code
function subtraction_Function() {
    var Subtraction = 7 - 2;
    document.getElementById("Math").innerHTML = "7 - 2 = " + Subtraction; //Print the result in HTML
}

//multiplication
function multiplication() {
    var simple_Math = 5 * 9;
    document.getElementById("Math").innerHTML = "5 * 9 = " + simple_Math; //Print the result in HTML
}

//Division
function division() {
    var simple_Math = 81 / 9;
    document.getElementById("Math").innerHTML = "81 / 9 = " + simple_Math; //Print the result in HTML
}

//multiply, subtract, add and divide numbers
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math; //Print the result in HTML
}

//Modulus Operator
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math; //Print the result in HTML
}

//unary operator
function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x; //Print the result in HTML
}

// Increment  Operators
function Increment() {
    var x = 7;
    x++;
    document.getElementById("Math").innerHTML = x; //Print the result in HTML}
}

//Decrement Operators
function Decrement() {
    var x = 8.15;
    x--;
    document.getElementById("Math").innerHTML = x; //Print the result in HTML}
}

//Random
window.alert(Math.random()); //Print the result in HTML

//Random number dislayed between 0 and 10
window.alert(Math.random() * 10); //Print the result in HTML

// Math Object Challenge. Generate a random number between 0 and 1
var randomNumber = Math.random(); //Print the result in HTML

// Math Object Challenge. Display the random number in the console
document.write("Random Number: ", randomNumber); //Print the result in HTML

