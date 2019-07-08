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
        console.log("Number inputted: " + event.key);
    } 
    else{
        console.log("Incorrect input");
    }
}