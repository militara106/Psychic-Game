// Initial Variables Set
var guessed = [];
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("gueesesLeft");

// Random number function
// X is range
function randomNum(x){
    var num = Math.floor((Math.random() * (x)) + 1);
    return num;
}

// Initial Answer Set
var random = (randomNum(10) - 1);
console.log("Answer is: " + random);

// Compare input to computer
// X is input
// Y is computer
function compare(x, y){
    if(x==y){
        return true;
    }
    else{
        return false;
    }
}


// Game Logic
// Start on Key
document.onkeyup = function (event) {
    // Check if button is a number
    if (
        event.key == '1' ||
        event.key == '2' ||
        event.key == '3' ||
        event.key == '4' ||
        event.key == '5' ||
        event.key == '6' ||
        event.key == '7' ||
        event.key == '8' ||
        event.key == '9' ||
        event.key == '0'
    ) {
        // Input Check
        console.log("Number inputted: " + event.key);

    } else {
        // Input Check
        console.log("Incorrect input: " + event.key);
    }
}