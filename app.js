var inputBox = document.querySelector("#input-box");
var btnTest = document.querySelector("#btn-test");
var outputBox = document.querySelector("#output");




function clickEvent(){
    var outputText = inputBox.value;
    outputBox.innerText = "You typed: " + outputText;

    // console.log("Button has been clicked");
    // console.log("input is", inputBox.value); // showing input of textarea in console
}

var btnOutput = btnTest.addEventListener("click", clickEvent);

// outputBox.innerText = "So many things to learn";

