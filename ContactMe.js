let fun_value = 1;

// Logiken bakom att klicka ner för menyn

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        if (fun_value > 1) {
            fun_value -= 1;
            updateText();
        }
    } else if (event.key === "ArrowDown") {
        if (fun_value < 3) {
            fun_value += 1;
            updateText();
        }
    }
});

function updateText() {

    // Gör så att menyn behåller sin standard struktur

    
    document.getElementById("b").textContent = ">>> Back";


    if (fun_value === 1) {
        document.getElementById("b").textContent = ">>> Back";
    } 
    
}

// Klickar enter, dirigerar användaren till en annan webbsida

document.addEventListener("keydown", function(event) {
    if (fun_value === 1 && event.key === "Enter") {
        window.location.href = "index.html";
    } 
    if (event.key === "Escape") { 
        window.location.href = "index.html";
    }
     
});

updateText();


