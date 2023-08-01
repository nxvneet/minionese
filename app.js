var inputTxt = document.querySelector("#input-box");
var btnTest = document.querySelector("#btn-test");
var outputTxt = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/morse.json";


function constructURL(text) {

    return url + "?" + "text=" + text;

}

function errorHandler(error) {

    console.log("server error", error);
    alert("Something wrong with server, try again later!")

}

function clickEvent() {
    var txtInput = inputTxt.value; // storing input text


    // calling server processing
    fetch(constructURL(txtInput))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            outputTxt.innerText = translatedTxt;
        })
        .catch(errorHandler);

}

btnTest.addEventListener("click", clickEvent);