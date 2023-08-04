const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll("controle-ajuste")
console.log(controle)
subtrair.addEventListener("click", () => {
    { manipulaDados("subtrair") }
    braco.value = parseInt(braco.value);
});

somar.addEventListener("click", () => {
    { manipulaDados("somar") }
    braco.value = parseInt(braco.value);
});

function manipulaDados(operacao) {
    if (operacao === "subtrair") {
        braco.value = parseInt(braco.value) - 1

    } else {
        braco.value = parseInt(braco.value) + 1
    }
}