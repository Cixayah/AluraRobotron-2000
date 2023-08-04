const botao = document.querySelectorAll("[data-botao]");
var lista = document.querySelector(".lista");

botao.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        mostraTintas(evento.target.id);
        someTintas(evento.target.id)
})
})

function mostraTintas(status) {
    if (status === "show") {
        lista.style.display = "block";
    }
}

function someTintas(status) {
    if (status === "hide") {
        lista.style.display = "none";
    }
}
