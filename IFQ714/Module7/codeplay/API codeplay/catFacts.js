window.onload = async function() {
    let catFactElement = document.getElementById("catFact");
    let response = await fetch("https://catfact.ninja/fact")
    if (!response.ok) {
        catFactElement.innerHTML = "Encountered a problem when retrieving a cat fact.";
    } else {
        let type = response.headers.get("content-type");
        if (type === "application/json") {
            let json = await response.json();
            catFactElement.innerHTML = json.fact;
        } else {
            catFactElement.innerHTML = "Did not receive JSON from the API.";
        }
    }
}