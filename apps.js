const displayValorAnterior = document.getElementById("valor-anterior")
const displayValorActual = document.getElementById("valor-actual")
const botonesNumeros = document.querySelectorAll(".numero")
const botonesOperadores = document.querySelectorAll(".operador")

console.log(displayValorActual, displayValorAnterior)
const display = new Display(displayValorActual, displayValorAnterior)
/* console.log(display)
 */
botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML)) 
});

botonesOperadores.forEach(boton => {
    boton.addEventListener("click", () => display.computar(boton.value))
})
