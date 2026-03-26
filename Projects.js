let fun_value = 1;


// Logiken bakom att klicka ner för menyn

function updateText() {

    // Gör så att menyn behåller sin standard struktur

    document.getElementById("B").textContent = "Back";

    // "Scrollar" ner för menyn
    if (fun_value === 1) {
        document.getElementById("B").textContent = ">>> Back";
    } 
    
}

// Klickar enter, dirigerar användaren till en annan webbsida

document.addEventListener("keydown", function(event) {
    if (fun_value === 1 && event.key === "Enter") {
        window.location.href = "Index.html";
    }
    if (event.key === "Escape") {
                window.location.href = "index.html";
            }
     
})

updateText();

// När muspekaren håller över headingen "Projects" kommer fun value bli 2
const heading = document.getElementById("line2");
heading.addEventListener("mouseenter", () => {
    fun_value += 1;
    console.log("Ja, musen gick igenom")
})