//AOS
AOS.init();

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
        linkCodigo: "https://github.com/SamuelSilva77/PAINEL-DE-PRODUTIVIDADE",
        img: "https://mgx-backend-cdn.metadl.com/generate/images/1178818/2026-05-10/oiweuoaaagoq/project-placeholder-1.png"
    },
    {
        linkSite: "https://samuelsilva77.github.io/CALCULADORA-DE-MARGEM-ACOES/",
        nome: "Calculo de Margem - Ações",
        sobre: "Aplicação web para análise de ações que calcula margem de compra com base no preço teto definido pelo usuário e na cotação atual. Usa consumo de API e Localstorage.",
        tecnologias: ["HTML", "CSS", "JS", "API REST"],
        linkCodigo: "https://github.com/SamuelSilva77/CALCULADORA-DE-MARGEM-ACOES",
        img: "img/margem.png"
    },
    {
        linkSite: " https://samuelsilva77.github.io/SERVICO-DE-LIMPEZA/",
        nome: "Landing Page - Serviço de Limpeza",
        sobre: "Site institucional de limpeza geral, desenvolvido para apresentar serviços de forma clara e objetiva, facilitar o contato com clientes e transmitir profissionalismo.",
        tecnologias: ["HTML", "TAILWID CSS", "JS"],
        linkCodigo: "https://github.com/SamuelSilva77/SERVICO-DE-LIMPEZA/",
        img: "https://mgx-backend-cdn.metadl.com/generate/images/1178818/2026-05-10/oiweuoaaagoq/project-placeholder-1.png"
    },
]


function criacao(){

    const botoes =  this.tecnologias.map((item) => {
        return "<button>" + item + "</button>"
    }).join(" ")


    containerProjetos.innerHTML += `
        <div class="card">
            <a href="${this.linkSite}" target="_blank" style="width: 100%; display: inline-block; height: 228px; overflow: hidden;">
                <div class="imagemProjeto">
                    <img src="${this.img}">
                </div>
            </a>
            <div class="conteudoTextoCard">
                <p class="nomeProjeto"> ${this.nome} </p>
                <span> ${this.sobre} </span>
                 <div>
                    ${botoes}
                </div>
                <a href="${this.linkCodigo}" target="_blank" class="codigo">
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


//ALTERAR IMAGENS DA PARTE SOBRE
let contadorGit = 0
function AlterarGit(){
    ++contadorGit
    let img = document.querySelectorAll(".cardRede img")[0]

    const arr = [ "img/githubSobreAzul.png", "img/githubSobreBranco.png"]

    img.src = arr[contadorGit]
 
    if(contadorGit == 1){
        contadorGit = -1
    }
}

let contadorLinkedin= 0
function AlterarLinkedin(){
    ++contadorLinkedin
    let img = document.querySelectorAll(".cardRede img")[1]

    const arr = [ "img/linkedinSobreAzul.png", "img/linkedinSobreBranco.png"]

    img.src = arr[contadorLinkedin]
 
    if(contadorLinkedin == 1){
        contadorLinkedin = -1
    }
}

let contadorEmail = 0
function AlterarEmail(){
    ++contadorEmail
    let img = document.querySelectorAll(".cardRede img")[2]

    const arr = [ "img/emailSobreAzul.png", "img/emailSobreBranco.png"]

    img.src = arr[contadorEmail]
 
    if(contadorEmail == 1){
        contadorEmail = -1
    }
}


