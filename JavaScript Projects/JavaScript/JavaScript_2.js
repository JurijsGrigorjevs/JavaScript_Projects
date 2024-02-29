// Contact Form
function contactForm() {
    let x = document.forms["form"]["fname"].value;
  
    let y = document.forms["form"]["lname"].value;
       
    let c = document.forms["form"]["email"].value;

    if (x === "") {
        alert("First Name must be filled out");
        return false;
    } else if (y === "") {
        alert("Last Name must be filled out");
        return false;
    } else if (c === "") {
        alert("Email must be filled out");
        return false;
    } else {
        // If all fields are filled out, do whatever you want, like submitting the form
        return true;
    }

}