let exibirOpçoes = document.getElementById("exibirOpçoes")

let DivlistaMenor = document.getElementById("DivlistaMenor")
let listaMenor = document.getElementById("listaMenor")

exibirOpçoes.addEventListener("click", exibir = () => {
    DivlistaMenor.classList.toggle("exibir")
})