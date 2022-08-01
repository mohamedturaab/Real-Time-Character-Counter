// alert("HI!")

const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter");
textareaEl.addEventListener("keyup", () => {
    // console.log("key is Pressed!!")

    updateCounter();

});

updateCounter();

// Create the Method // 

function updateCounter(){
    totalCounterEl.innerHTML = textareaEl.value.length;
    remainingEl.innerHTML = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}

// JavaScript code is Fishing//

