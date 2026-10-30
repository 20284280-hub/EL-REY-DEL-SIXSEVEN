const contador = document.getElementById("Contador");
const btnSumar = document.getElementById("sumar");
const btnReiniciar = document.getElementById("reiniciar");

let clicks = 0;

btnSumar.addEventListener("click", () => {
    clicks++;
    contador.textContent = clicks;
});

btnReiniciar.addEventListener("click", () => {
    clicks = 0;
    contador.textContent = clicks;
});