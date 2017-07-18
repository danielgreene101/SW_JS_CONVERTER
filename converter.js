function toCelsius (tempInput) {
    console.log(tempInput);
    //return document.getElementById("tempInput").value * 1.8 + 32;
    document.getElementById("result").innerHTML += document.getElementById("tempInput").value * 1.8 + 32 + '<br>';
}

function toFahrenheit (temptInput) {
    console.log(temptInput);
    /*return document.getElementById("tempInput").value  - 32 * .5556;*/
    document.getElementById("result").innerHTML += document.getElementById("tempInput").value  - 32 * .5556 + '<br>';
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter(){
    if (document.getElementById("but").checked == true){
        toCelsius();
    }else{
        document.getElementById("cel").checked == true;
        toFahrenheit();
    }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);