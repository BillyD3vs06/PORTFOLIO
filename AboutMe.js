let fun_value = 1;


function updateText() {
    document.getElementById("About2").textContent = "Back";
    if (fun_value === 1) {
        document.getElementById("About2").textContent = ">>> Back";
    }   
}

document.addEventListener("keydown", function(event) {
    if (fun_value === 1 && event.key === "Enter") {
        window.location.href = "Index.html";
    }
    if (event.key === "Escape") {
                window.location.href = "index.html";
            }  
})

updateText();

const heading = document.getElementById("line1");
heading.addEventListener("mouseenter", () => {    
    fun_value = fun_value;
})