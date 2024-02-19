//main.js


//window.alert method
window.alert("Hello, world!");

//document.write method
document.write("Hello, world!");

//creating two variables
var A = "This is a string";
document.write(A);

var B = "This is a word"
window.alert(B);

document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\"Bart responded.");

document.write("\"Be who you are and say what you feel," + "because those who mind don\'t matter and those who matter don\'t mind.\"" + "-Dr. Seuss");


//creating two variables
var C = "Concatenated" + "String"
document.write(C);

var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine", Daughter = "Penny", Son = "Zorro";
document.write(Dad);

document.write(3 + 3);

//creating function My_First_Function
function My_First_Function() {  //Defining a function and naming it
    var str = "This is the button text!"; //Defining a variable and giving it
    document.getElementById("Button_Text").innerHTML = str; //Putting the value of the variable into the HTML elementFromPoint with the "Button_Text" id
}

//creating two variables
var Sent1 = "This is the beginning of the string";
var Sent2 = "and this is the end of the string";

//displaying the variables using the document.write method
document.write(Sent1 + Sent2);

//an expression
document.write(33 * 84);

// creating function
function displayDate() {
    document.getElementById("time").innerHTML = Date();
}