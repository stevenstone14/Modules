 window.onload = function () {
    document.getElementById("colourSelect").addEventListener("change", changeColour);
    document.getElementById("addElementButton").addEventListener("click", addElement);
    document.getElementById("removeElementButton").addEventListener("click", removeElement);
}


function changeColour(event) {
    let colour = event.target.value;
    let elements = document.getElementsByClassName("sideOne");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("style").includes("flex:1")) {
            elements[i].setAttribute("style", `flex:1; color:${colour}`);
        } else {
            elements[i].setAttribute("style", `color:${colour}`);
        }
    }
}


function addElement() {
    let newElement = document.createElement("p");
    newElement.textContent = "Newly added element";
    let sideTwo = document.getElementById("sideTwo");
    
    newElement.textContent = `Newly added element ${sideTwo.children.length}`;
    sideTwo.appendChild(newElement);
}

function removeElement() {
    let sideTwo = document.getElementById("sideTwo");
if(sideTwo.lastElementChild.tagName.toLowerCase() === "p"){
    sideTwo.removeChild(sideTwo.lastElementChild);
}
}