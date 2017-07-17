function toCelsius (tempInput) {
    return tempInput * 1.8 + 32;
    console.log(tempInput);
}

function toFahrenheit (temptInput) {
    return temptInput - 32 * .5556;
    console.log(temptInput);
}

// Get a reference to the button element in the DOM
var button = document.getElementById("result");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent){
  console.log("event", clickEvent);
    if (radios[f].checked){
        toCelsius();
    }else{
        (radios[c].checked)
        toFahrenheit();
    }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
