//creating function My_First_Function
function My_First_Function() {  //Defining a function and naming it
    var str = "This is the button text!"; //Defining a variable and giving it
    document.getElementById("Button_Text").innerHTML = str; //Putting the value of the variable into the HTML elementFromPoint with the "Button_Text" id
}

// creating function
function displayDate() {
    document.getElementById("time").innerHTML = Date();
}