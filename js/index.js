document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("inputText");
    const buttonText = document.getElementById("buttonText");
    buttonText.addEventListener("click", function() {
        const textValue = inputText.value; 
        if (textValue) { localStorage.setItem("storedData", textValue); }
    });
});
