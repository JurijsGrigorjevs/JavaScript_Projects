// Dictionary
function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 7,
        Sound: "Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

// Operator as words / delete
function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 7,
        Sound: "Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //The output of this code would be: “undefined” since the value no longer exists in our “dictionary”.
}

