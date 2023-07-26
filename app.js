var btnTest = document.querySelector("#btn-test");

function clickEvent(){
    console.log("Button has been clicked");
}

var btnOutput = btnTest.addEventListener("click", clickEvent);

