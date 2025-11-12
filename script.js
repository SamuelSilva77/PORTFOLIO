//PROJETOS
let ConsultoriaJaime = document.getElementById("ConsultoriaJaime")
let Consultoriarenova = document.getElementById("ConsultoriaRenova")
let formulario = document.getElementById("formulario")
let listaDeTarefas = document.getElementById("listaDeTarefas")


//TEXTO
let DescricaoProjeto = document.getElementById("DescricaoProjeto");
let tecnologias = document.getElementById("tecnologias")
let NumeroProjeto = document.getElementById("projeto")
let link = document.getElementById("link")

//EVENTOS
ConsultoriaJaime.addEventListener("click", () => {
    NumeroProjeto.innerHTML = "Projeto 1"

    DescricaoProjeto.innerHTML = "Esta é uma landing page desenvolvida para uma empresa de consultoria fictícia, a 'Jaime Consultoria'. O projeto visa apresentar a empresa, seus serviços, projetos, e depoimentos de clientes de forma moderna e engajadora.";
    tecnologias.innerHTML = "<li> HTML </li> <li> CSS </li> <li> JAVASCRIPT </li>"
    link.innerHTML = `<a href=" https://samuelsilva77.github.io/CONSULTORIA-JAIME/" target="_blank"> LINK DO PROJETO </a>` 
})


Consultoriarenova.addEventListener("click", () => {
    NumeroProjeto.innerHTML = "Projeto 2"

    DescricaoProjeto.innerHTML = "Este projeto consiste na criação de uma Landing Page Institucional para uma empresa de consultoria fictícia, a 'Renova Consultoria'. O objetivo foi desenvolver um design visualmente atraente e uma estrutura de conteúdo clara para apresentar os serviços e a proposta de valor da empresa aos visitantes.";
    tecnologias.innerHTML = "<li> HTML </li> <li> CSS </li>"
    link.innerHTML = `<a href="https://samuelsilva77.github.io/CONSULTORIA-RENOVA/" target="_blank"> LINK DO PROJETO </a>` 
})


formulario.addEventListener("click", () => {
    NumeroProjeto.innerHTML = "Projeto 3"

    DescricaoProjeto.innerHTML = "Este projeto é uma interface moderna e responsiva de formulário de criação de conta, desenvolvida com HTML, CSS e JavaScript. Ele permite ao usuário preencher informações pessoais, validar campos e criar uma experiência visual agradável e intuitiva.";
    tecnologias.innerHTML = "<li> HTML </li> <li> CSS </li> <li> JAVASCRIPT </li>"
    link.innerHTML = `<a href="https://samuelsilva77.github.io/FORMULARIO/" target="_blank"> LINK DO PROJETO </a>` 
})


listaDeTarefas.addEventListener("click", () => {
    NumeroProjeto.innerHTML = "Projeto 4"    

    DescricaoProjeto.innerHTML = "Este projeto é uma aplicação simples e funcional de lista de tarefas (To-Do List) desenvolvida com HTML, CSS e JavaScript puro. Ele permite criar, marcar e excluir tarefas diretamente do navegador, com armazenamento local via LocalStorage, garantindo que suas tarefas permaneçam salvas mesmo após recarregar a página.";
    tecnologias.innerHTML = "<li> HTML </li> <li> CSS </li> <li> JAVASCRIPT </li>"
    link.innerHTML = `<a href="https://samuelsilva77.github.io/LISTA-DE-TAREFAS/" target="_blank"> LINK DO PROJETO </a>` 
})



