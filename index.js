let fun_value = 1;


// Logiken bakom att klicka ner för menyn

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        if (fun_value > 1) {
            fun_value -= 1;
            updateText();
        }
    } else if (event.key === "ArrowDown") {
        if (fun_value < 4) {
            fun_value += 1;
            updateText();
        }
    }
});

function updateText() {

    // Gör så att menyn behåller sin standard struktur

    document.getElementById("line1").textContent = "About me";
    document.getElementById("line2").textContent = "Projects";
    document.getElementById("line3").textContent = "Experiences and other merits";
    document.getElementById("line4").textContent = "Contact me";

    // "Scrollar" ner för menyn

    if (fun_value === 1) {
        document.getElementById("line1").textContent = ">>> About me";
    } else if (fun_value === 2) {
        document.getElementById("line2").textContent = ">>> Projects";
    } else if (fun_value === 3) {
        document.getElementById("line3").textContent = ">>> Experiences and other merits";
    } else if (fun_value === 4) {
        document.getElementById("line4").textContent = ">>> Contact me";
    }
}

// Klickar enter, dirigerar användaren till en annan webbsida

document.addEventListener("keydown", function(event) {
    if (fun_value === 1 && event.key === "Enter") {
        window.location.href = "AboutMe.html";
    } if (fun_value === 2 && event.key === "Enter") {
        window.location.href = "Projects.html";
    } if (fun_value === 3 && event.key === "Enter") {
        window.location.href = "Merits.html";
    } if (fun_value === 4 && event.key === "Enter") {
        window.location.href = "ContactMe.html";
    } if (event.key === "Escape") {
        window.location.href = "index.html";
    }
});
      

updateText();

const element = document.getElementById("line1");
const element2 = document.getElementById("line2");
const element3 = document.getElementById("line3");
const element4 = document.getElementById("line4");


element.addEventListener("mouseenter", () => {
  element.textContent = ">>> About me";
  fun_value = 1;
  updateText();
});

element.addEventListener("mouseleave", () => {
  element.textContent = "About me";
  fun_value = 0;
  updateText();
});

element2.addEventListener("mouseenter", () => {
  element2.textContent = " >>> Projects";
  fun_value = 2;
  updateText();
});

element2.addEventListener("mouseleave", () => {
  element2.textContent = "Projects";
  fun_value = 0;
  updateText();
});

element3.addEventListener("mouseenter", () => {
  element3.textContent = ">>> Experiences and other merits";
  fun_value = 3;
  updateText();
});

element3.addEventListener("mouseleave", () => {
  element3.textContent = "Experiences and other merits";
  fun_value = 0;
  updateText();
});

element4.addEventListener("mouseenter", () => {
  element4.textContent = ">>> Contact Me";
  fun_value = 4;
  updateText();
});

element4.addEventListener("mouseleave", () => {
  element4.textContent = "Contact Me";
  fun_value = 0;
  updateText();
});
