var inputBox = document.querySelector("#input-box");
var btnTest = document.querySelector("#btn-test");
var outputBox = document.querySelector("#output");




function clickEvent() {
    var outputText = inputBox.value;
    outputBox.innerText = "You typed: " + outputText;

}

var btnOutput = btnTest.addEventListener("click", clickEvent);