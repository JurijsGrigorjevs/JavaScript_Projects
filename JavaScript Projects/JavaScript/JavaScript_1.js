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


// getElementsByClassName() Method
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";//We have set the index value of variable A to 0, meaning it will now be displayed in the first element with the class “Click” (once the button is clicked).
}

// HTML <canvas> Element
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 150, 150);

function Canvas_Function() {
    var a = document.getElementById("myCanvas");
    var ctx = a.getContext("2d");

    // create gradient
    const grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(0.5, "red");
    grd.addColorStop(1, "white");

    // fill rectangle
    ctx.fillStyle = grd;
    ctx.fillRect(50, 50, 150, 150);

// image
    var img = document.getElementById("galaxy");
    ctx.drawImage(img, 300, 50, 150, 150);
    //ctx.drawImage(img, 200, 10);
}