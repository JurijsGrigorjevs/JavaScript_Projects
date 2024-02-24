// A global variable would be written as follows:
var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100 + "<br>");
}
Add_numbers_1();// 30
Add_numbers_2();// 110

//local variable
function Add_numbers_3() {
    var a = 40;
    document.write(20 + a + "<br>");
}
function Add_numbers_4() {
    document.write(a + 50 + "<br>");
}
Add_numbers_3();//60
Add_numbers_4();//not defined

//local variable in console.log
function Add_numbers_5() {
    var a = 70;
    console.log(20 + a);
}
function Add_numbers_6() {
    console.log(a + 90);
}
Add_numbers_5();//90
Add_numbers_6();//not defined

// IF statements
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// Else Statements
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!"
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

// Else If Statements
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}