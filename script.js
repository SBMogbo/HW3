
// Dom elements
var resultEl = document.getElementById('result')
var lengthEl = document.getElementById('length');
var upperCaseEl = document.getElementById('UpperCase');
var lowerCaseEl = document.getElementById('LowerCase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');
var clipboardEl = document.getElementById('clipboard');


const randomFunc = {

    //upper : getRandomUpper,
    //lower : getRandomLower,
    //number : getRandomNumber,
    //symbol : getRandomSymbol
};

// event listen
generateEl.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasLower = lowerCaseEl.checked;
    const hasUpper = upperCaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});



//Generate password fun 
function generatePassword(lower, upper, number, symbol, length){
var generatePassword= "";

var typesCount = lower + upper + number + symbol


console.log("typesCount", typesCount)
;

var typesArr = [lower + upper + number + symbol];


console.log("typesArr", typesArr);

if(typesCount === 0) {
    return '';
}

for(let i=0; i<length; i+=typesCount) {
    typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
    });
}

const finalPassword = generatedPassword.slice(0, length);


return finalPassword;
}

//Generator Functions http://www.net-comber.com/charset.html

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

} function getRandomSymbol() {
    var symbols = "\"#$%&'()*+,-./:;<=>?@[]^_{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];

}
