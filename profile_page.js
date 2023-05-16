
var name = "Anthony Culm";
var nameElement = document.querySelector("#difName");
function nameChange() {
    nameElement.innerText = "Tony Culm"
}


function allow(name) {
    console.log(name)
    var element = document.querySelector(name)
    element.remove();
}


function deny(name) {
    console.log(name)
    var element = document.querySelector(name)
    element.remove();
}

