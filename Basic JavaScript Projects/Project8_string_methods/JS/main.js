// concat() Method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a comlete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//slice() Method
function slice_Method() {
    var Sentence = "All work and no play makes George a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase() Method
function toUpperCase_Method() {
    var sentence = "JavaScript String Methods";
    var section = sentence.toUpperCase(sentence);
    document.getElementById("toUpperCase").innerHTML = section;
}

//search() method
function search_method() {
    var sentence_1 = "The search() method searches a string for a string (or a regular expression) and returns the position of the match";
    var section_1 = sentence_1.search("method");
    document.getElementById("Search").innerHTML = section_1; //13
}

// toString()” method
function toString_method() {
    var X = 166;
    document.getElementById("Number_to_string").innerHTML = X.toString();//166
}

// toPrecision() Method - The toPrecision() method formats a number to a specified length.
function toPrecision_Method() {
    var Y = 21741.2432432;
    document.getElementById("toPrecision").innerHTML = Y.toPrecision(8);//21741.243
}

// The toFixed() method converts a number to a string. The toFixed() method rounds the string to a specified number of decimals.
function toFixed_method() {
    var num = 41.2434;
    var a = num.toFixed();
    var b = num.toFixed(3);
    document.getElementById("Fixed_method").innerHTML = a;//41
    document.getElementById("Fixed_method_1").innerHTML = b;//41.24
}

// The valueOf() method returns the primitive value of a string.The valueOf() method does not change the original string.The valueOf() method can be used to convert a string object into a string.
function valueOf_method() {
    var text = "The valueOf() method is the default method for JavaScript strings.";
    var result = text.valueOf();
    document.getElementById("ValueOf_method").innerHTML = result;//The valueOf() method is the default method for JavaScript strings. 
}