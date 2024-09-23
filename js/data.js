document.addEventListener("DOMContentLoaded", function() {
    const dataDisplay = document.getElementById("data");
    const storedData = localStorage.getItem("storedData");
    dataDisplay.textContent = storedData ? storedData : "No hay datos guardados.";
});
