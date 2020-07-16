// function to password gen
function generate() {

    let password = "";
    
    let length = +document.getElementById("length").value;
    // check values
    let lowerCase = document.getElementById("lowercase").checked;
    let upperCase = document.getElementById("uppercase").checked;
    let symbol = document.getElementById("symbols").checked;
    let number = document.getElementById("numbers").checked;
 

    if (lowerCase + upperCase + symbol + number <= 0)
        return;
// loop for random order
    for (let i = 0; i < length; i++) {

        const x = generater(0, 3);
        if (lowerCase && x === 0) {
            password += generateRandomLowerCase();
        } else if (upperCase && x === 1) {
            password += generateRandomUpperCase();
        } else if (symbol && x === 2) {
            password += generateRandomSymbol();
        } else if (number && x === 3) {
            password += generater(0, 9);
        } else {
            i--;
        }

    }

    document.getElementById("result").textContent = password;

}
// need to a refresh
generate(generate.onclick);

// lower case function 
function generateRandomLowerCase() {
    return String.fromCharCode(generater(97, 122));
}
// upper case function 
function generateRandomUpperCase() {
    return String.fromCharCode(generater(65, 90));
}
//symbol function
function generateRandomSymbol() {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
    return symbols[generater(0, symbols.length - 1)];
}
// number function 
function generater(min = 0, max = 1) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
} 

