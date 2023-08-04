const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")
const robotron = document.querySelector("#robotron")

somar.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) + 1;


});

subtrair.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) - 1;


});
