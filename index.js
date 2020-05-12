

function ligar() {
  
    const lampada = document.querySelector("#lampada")

    lampada.src = "img/lampada-ligada.jpeg"
    lampada.alt = "Lâmpada ligada"

    const botaoLigar = document.querySelector("#botao-ligar")
    botaoLigar.disabled = true


    const botaoDesligar = document.querySelector("#botao-desligar")
    botaoDesligar.disabled = false
}

function desligar() {
    const lampada = document.querySelector("#lampada")
    lampada.src = "img/lampada-desligada.jpeg"
    lampada.alt = "Lâmpada desligada"

    const botaoLigar = document.querySelector("#botao-ligar")
    botaoLigar.disabled = false

    const botaoDesligar = document.querySelector("#botao-desligar")

    botaoDesligar.disabled = true
}
