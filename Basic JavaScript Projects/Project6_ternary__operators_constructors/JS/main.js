// Project6_Ternary_Operators_Constructors
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//create a basic program that outputs whether or not a user is old enough to vote
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value
    Can_vote = (Age < 18) ? "You are not old enough to vote." : "You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote + " Thank you!";
}

//Keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var George = new Vehicle("Lexus", "ES300", 2001, "White");
var Alma = new Vehicle("BMW", "X7", 2024, "Black");
var Boris = new Vehicle("Honda", "Accord", 2020, "Red");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "George drives a " + George.Vehicle_Color + " - colored " + George.Vehicle_Model + " manufactured in " + George.Vehicle_Year + " Mark " + George.Vehicle_Make; // George drives a White - colored ES300 manufactured in 2001 Mark Lexus
}

//Nested Functions
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {
            Starting_point += 1;
        }
        Plus_one();
        return Starting_point; //10
    }
}