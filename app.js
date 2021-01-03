var factor = 0.822;
var dolares = document.getElementById("dolares");
var boton = document.getElementById("boton");
var result = document.getElementById("result");
var display = document.getElementById("display");
var euros = 0;
function dol2eur() {
  euros = Number.parseFloat(dolares.value * factor).toFixed(3);
}

function mostrarResultado() {
  display.style.visibility = "visible";
  result.textContent = "Euros: " + euros;
}

function main() {
  boton.addEventListener("click", function () {
    dol2eur();
    mostrarResultado();
  });
}

main();
