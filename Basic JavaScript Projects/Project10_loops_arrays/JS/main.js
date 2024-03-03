// While Loops
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//Length Property Challenge
function Length_Property() {
    var text = "This is my website!";
    var lenght = text.length;
    document.getElementById("Length").innerHTML = "This is my website! = " + lenght;
}

// For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Arrays and Objects
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[1] + ".";
}

// Const Keyword
function constant_function() {
    const Musical_Instrument = {type:"guiter", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//Let and Var keyword
function let_function() {
    var X = 99;
    document.getElementById("var").innerHTML = X;
    {
        let X = 88;
        document.getElementById("let").innerHTML = X;
    }
    document.getElementById("var1").innerHTML = X;
}

//Let and Var keyword_1
function var_function() {
    var X = 33;
    document.getElementById("var2").innerHTML = X;
    {
        var X = 55;
        document.getElementById("var3").innerHTML = X;
    }
    document.getElementById("var4").innerHTML = X;
}


// Scopes
var V = 30;
 document.getElementById("Example_1").innerHTML ="Global Scope: " + V;

//myFunction();

function myFunction() {
    var N = 10;
    document.getElementById("Example_2").innerHTML ="Function Scope: " + N;

    if (N > 5) {
        let S = 20;
        const G = 30;
        result = S + G;
        document.getElementById("Example_3").innerHTML = "Block Scope: " + result;//S + G;
    } 
    document.getElementById("Example_4").innerHTML = result + S;// it wouldn’t execute.
}

// Return Statement
function Return_Function() {
    function returnFunction(name) {
        return "Hi " + name;
    }
    document.getElementById("Return").innerHTML = returnFunction("George");
}

// Object
function Object_Function() {
    let car = {
        make: " Lexus ",
        model: " ES300 ",
        year: " 2001 ",
        color: " white ",
        description: function () {
            return "The car is a  " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("Object").innerHTML = car.description();
}

//Break and Continue statement
function break_contionue_Function() {
    const cars = ["BMW", "Volvo", "Lexus", "Ford"];
    let text = "";
    list: {
        text += cars[0] + "<br>";
        text += cars[1] + "<br>";
        text += cars[2] + "<br>";
        break list;
        text += cars[3] + "<br>";
    }


    // break statement - The break statement, without a label reference, can only be used to jump out of a loop or a switch.
    let number = "";
    for (let i = 0; i < 10; i++) {
        if (i === 7) { break; }
        number += "The number is " + i + "<br>";
    }

     // continue statement - The continue statement (with or without a label reference) can only be used to skip one loop iteration.
    let number1 = "";
    for (let i = 0; i < 10; i++) {
        if (i === 7) { continue; }
        number1 += "The number is " + i + "<br>";
    }


    document.getElementById("break_continue").innerHTML = text + "<br>" + number +"<br>" + number1;
}


//  Arrow Function
Arrow_Function = () => {
var car;
car = (val) => "These are my favorite car brands: " + val;
    document.getElementById("Arrow").innerHTML = car("Honda, Lexus, and Ford");
}

// Array .Some() Method
array_Function = () => {
    var ages = [2, 3, 5, 4, 62, 5, 3];
    // Using the arrow function to pass in parameter of age 
    checkAge = (age) => age >= 18;

        // Use the .some() to iterate throuugh the array of ages and display the result.
        document.getElementById("array").innerHTML = ages.some(checkAge);
}