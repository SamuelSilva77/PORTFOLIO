let exibirOpçoes = document.getElementById("exibirOpçoes")

let DivlistaMenor = document.getElementById("DivlistaMenor")
let listaMenor = document.getElementById("listaMenor")

exibirOpçoes.addEventListener("click", exibir = () => {
    DivlistaMenor.classList.toggle("exibir")
})

//CARREGAR PROJETOS

//ELEMENTOS
let containerProjetos = document.getElementById("containerProjetos")

const dados = [
    {
        linkSite: "https://samuelsilva77.github.io/PAINEL-DE-PRODUTIVIDADE/",
        nome: "Painel de Produtividade",
        sobre: "Um painel visual de acompanhamento de hábitos que ajuda a monitorar sua consistência diária e progresso ao longo do tempo.",
        tecnologias: ["HTML", "CSS", "JAVASCRIPT", "API REST"],
        linkCodigo: "https://github.com/SamuelSilva77/PAINEL-DE-PRODUTIVIDADE"
    },
    {
        linkSite: " https://samuelsilva77.github.io/SERVICO-DE-MUDANCAS/",
        nome: "Landing Page - Serviço de Mudanças",
        sobre: "Site profissional para empresa de mudanças, apresentando serviços, valores e formas de contato de maneira clara e organizada.",
        tecnologias: ["HTML", "TAILWIND", "JS"],
        linkCodigo: "https://github.com/SamuelSilva77/SERVICO-DE-MUDANCAS"
    },
    {
        linkSite: " https://samuelsilva77.github.io/SERVICO-DE-LIMPEZA/",
        nome: "Landing Page - Serviço de Limpeza",
        sobre: "Site institucional de limpeza geral, desenvolvido para apresentar serviços de forma clara e objetiva, facilitar o contato com clientes e transmitir profissionalismo.",
        tecnologias: ["HTML", "TAILWID CSS", "JS"],
        linkCodigo: "https://github.com/SamuelSilva77/SERVICO-DE-LIMPEZA/"
    },
]


function criacao(){

    const botoes =  this.tecnologias.map((item) => {
        return "<button>" + item + "</button>"
    }).join(" ")


    containerProjetos.innerHTML += `
        <div class="card">
            <a href="${this.linkSite}"  style="display: inline-block; height: 228px; overflow: hidden;">
                <img src="https://mgx-backend-cdn.metadl.com/generate/images/1178818/2026-05-10/oiweuoaaagoq/project-placeholder-1.png" class="imagemProjeto">
            </a>
            <div class="conteudoTextoCard">
                <p class="nomeProjeto"> ${this.nome} </p>
                <span> ${this.sobre} </span>
                 <div>
                    ${botoes}
                </div>
                <a href="${this.linkCodigo}"class="codigo">
                    <img src="img/github.png" alt="">
                    <p>Código</p>
                </a>
            </div>
        </div>
    `
}


dados.forEach((item, index) => {
    criacao.apply(item)
})
