let fun_value = 1;


function updateText() {
    if (fun_value === 1) {
        document.getElementById("Merits").textContent = ">>> Back";
    }   
}

document.addEventListener("keydown", function(event) {
    if (fun_value === 1 && event.key === "Enter") {
        window.location.href = "index.html";
    }
    if (event.key === "Escape") {
                window.location.href = "index.html";
            }
})

updateText();

const heading = getElementById("line3");
heading.addEventListener("mouseenter", () => {    
    
})