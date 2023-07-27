var inputBox = document.querySelector("#input-box");
var btnTest = document.querySelector("#btn-test");
var outputBox = document.querySelector("#output");



function clickEvent(){

    outputBox.innerText = "You typed: " + inputBox.value;

    // console.log("Button has been clicked");
    // console.log("input is", inputBox.value); // showing input of textarea in console
}

var btnOutput = btnTest.addEventListener("click", clickEvent);

// outputBox.innerText = "So many things to learn";

