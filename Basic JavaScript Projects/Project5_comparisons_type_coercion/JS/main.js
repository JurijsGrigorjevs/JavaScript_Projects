//This operator gives the data type of a variable.  For example, the output “string” we would write the following JavaScript code:
document.write(typeof "Word" + "<br>");

//Or to output “number” we would write:
document.write(typeof 3 + "<br>");

//Type Coercion
document.write("10" + 5 + "<br>");

//function
function my_new_Function1() {
    document.getElementById("Test").innerHTML = 0 / 0; // NaN because you can’t divide 0 by 0.
}

function my_new_Function2() {
    document.getElementById("Test").innerHTML = isNaN("This is a string");//This would display the result “true” because 'This is a string' is not a number.
}

function my_new_Function3() {
    document.getElementById("Test").innerHTML = isNaN("007");//This would result in “false” because 007 is a number.
}

//Infinity
document.write(2E310 + "<br>");//To display “infinity” (higher than our maximum floating point number), we would write any number larger than 1.7976931348623157E308.

//Negative Infinity
document.write(-2E310 + "<br>");//To display -Infinity, we would write any negative number that is -1.7976931348623157E308 or lower

//greater than operator
document.write((10 > 5) + "<br>"); //The output would be “true” because 10 is larger than 5.

//lesser than operator
document.write((10 < 5) + "<br>"); //To output “false”

// //console.log() Method
let x = 5;
let y = 10;
console.log("The value of x is:", x);
console.log("The value of y is:", y);
console.log("The sum of x and y is:", x + y);

//Display “false” in the console using Boolean logic and the console.log() method.
console.log((10 < 9) + "<br>"); // false

// Double Equal Signs
document.write((10 == 10) + "<br>"); //true

document.write((4 == 18) + "<br>"); // false

//Triple Equal Signs
x = 17;
y = 17;
document.write((x === y) + "<br>"); // true

a = 99;
b = "99";
document.write((a === b) + "<br>"); //false

c = "George";
d = "George!";
document.write((c === d) + "<br>"); //false

h = 99;
v = "99";
document.write((h === v) + "<br>"); //false

// Logical Operators
// && - AND
document.write((6 > 2 && 12 > 8) + "<br>"); // true

// && - AND
document.write((8 > 9 && 11 > 8) + "<br>"); // false

// || - OR
document.write((4 > 8 || 14 > 8) + "<br>"); // true

// || -OR
document.write((9 > 15 || 35 > 45) + "<br>"); // false

// Not Operator - false
function not_Function1() {
    document.getElementById("Not").innerHTML = !(20 > 10); // false
}

// Not Operator - true
function not_Function2() {
    document.getElementById("Not").innerHTML = !(6 > 11) // true
}