// switch statement
function Car_Function() {
    var Car_Output;
    var Cars = document.getElementById("Car_Input").value;
    var Car_String = " is a great car!";
    switch (Cars) {
        case "Lexus":
            Car_Output = "Lexus" + Car_String;
            break;
        case "Ford":
            Car_Output = "Ford" + Car_String;
            break;
        case "Honda":
            Car_Output = "Honda" + Car_String;
            break;
        case "Chevrolet":
            Car_Output = "Chevrolet" + Car_String;
            break;
        case "BMW":
            Car_Output = "BMW" + Car_String;
            break;
        case "Volvo":
            Car_Output = "Volvo" + Car_String;
            break;
        default:
            Car_Output = "Please enter a car exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Car_Output;
}