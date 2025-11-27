let contador = 0

//TEXTO
let DescricaoProjeto = document.getElementById("DescricaoProjeto");
let tecnologias = document.getElementById("tecnologias")
let NumeroProjeto = document.getElementById("projeto")
let link = document.getElementById("link")

//PROJETOS

const info = [
    {numero: "Projeto 1",
    descricao: "Esta é uma landing page desenvolvida para uma empresa de consultoria fictícia, a 'Jaime Consultoria'. O projeto visa apresentar a empresa, seus serviços, projetos, e depoimentos de clientes de forma moderna e engajadora.",
    tecnologia: `<li>HTML</li> <li>CSS</li> <li>JAVASCRIPT</li>`,   
    link:  `<a href=" https://samuelsilva77.github.io/CONSULTORIA-JAIME/" target="_blank">LINK DO PROJETO</a>`
},
    {numero: "Projeto 2",
    descricao: "Este projeto consiste na criação de uma Landing Page Institucional para uma empresa de consultoria fictícia, a 'Renova Consultoria'. O objetivo foi desenvolver um design visualmente atraente e uma estrutura de conteúdo clara para apresentar os serviços e a proposta de valor da empresa aos visitantes.",
    tecnologia: `<li>HTML</li> <li>CSS</li>`,    
    link: `<a href=" https://samuelsilva77.github.io/CONSULTORIA-RENOVA/" target="_blank">LINK DO PROJETO</a>`
},
    {numero: "Projeto 3",
    descricao: "Este projeto é uma interface moderna e responsiva de formulário de criação de conta, desenvolvida com HTML, CSS e JavaScript. Ele permite ao usuário preencher informações pessoais, validar campos e criar uma experiência visual agradável e intuitiva.",
    tecnologia: `<li>HTML</li> <li>CSS</li> <li>JAVASCRIPT</li>`,  
    link: `<a href="https://samuelsilva77.github.io/FORMULARIO/" target="_blank">LINK DO PROJETO</a>`
},
    {numero: "Projeto 4",
    descricao: "Este projeto é uma aplicação simples e funcional de lista de tarefas (To-Do List) desenvolvida com HTML, CSS e JavaScript puro. Ele permite criar, marcar e excluir tarefas diretamente do navegador, com armazenamento local via LocalStorage, garantindo que suas tarefas permaneçam salvas mesmo após recarregar a página.",
    tecnologia: `<li>HTML</li> <li>CSS</li> <li>JAVASCRIPT</li>`,
    link: `<a href="https://samuelsilva77.github.io/LISTA-DE-TAREFAS/" target="_blank">LINK DO PROJETO</a>`
},
    {numero: "Projeto 5",
    descricao: "Site profissional para empresa de mudanças, apresentando serviços, valores e formas de contato de maneira clara e organizada. O projeto destaca rapidez, segurança e atendimento confiável, com uma fácil navegação para que o cliente encontre tudo o que precisa sem complicação.",
    tecnologia: `<li>HTML</li> <li>CSS</li> <li>JAVASCRIPT</li>`,
    link: `<a href="https://samuelsilva77.github.io/SERVICO-DE-MUDANCAS/" target="_blank">LINK DO PROJETO</a>`
},
]


function atualizar(projeto, descricao, tecnologia, site){
    NumeroProjeto.innerHTML = projeto
    DescricaoProjeto.innerHTML = descricao
    tecnologias.innerHTML = tecnologia
    link.innerHTML = site
}

function clique(){
    atualizar(info[contador].numero, info[contador].descricao, info[contador].tecnologia, info[contador].link)
    console.log(contador)
}



