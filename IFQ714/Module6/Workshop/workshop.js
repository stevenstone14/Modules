// Sets the text to regular style.
function setTextRegular() {
    const text = document.getElementById("changingText");
    text.setAttribute("style", "font-style: normal; font-weight: normal");
}

// Sets the text to italic style.
function setTextItalic() {
    const text = document.getElementById("changingText");
    text.setAttribute("style", "font-style: italic; font-weight: normal");
}

// Sets the text to bold style.
function setTextBold() {
    const text = document.getElementById("changingText");
    text.setAttribute("style", "font-style: normal; font-weight: bold");
}

// Sets the background colour.
function setBackgroundColour(colour) {
    document.body.setAttribute("style", `background-color:${colour}`);
}
function getSelectedColour(event){
    let colour = event.target.value;
    setBackgroundColour(colour);
}

window.onload = function(){
    document.getElementById("regularButton").addEventListener("click",setTextRegular);
    document.getElementById("italicButton").addEventListener("click",setTextItalic);
    document.getElementById("boldButton").addEventListener("click",setTextBold);
    document.getElementById("colourSelect").addEventListener("click",getSelectedColour);
    document.getElementById("disableButton").addEventListener("click",disableEventListener);
}


function disableEventListener(){
    document.getElementById("colourSelect").removeEventListener("changed", function(){
        
    });
}




// Create functions that add or remove the event listener for the drop-down list
// and attach them as event listeners to the Enable and Disable button click events. 

// The event listeners should also disable the button clicked and enable the
// other by setting the disabled property of the elements.

//function enableEventListener() {
//    document.getElementById("colourSelect").addEventListener("changed", [drop down callback]);
//    document.getElementById("enableButton").disabled = true;
//    document.getElementById("disableButton").disabled = false;
// }