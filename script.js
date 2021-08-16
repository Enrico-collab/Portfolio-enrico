// Criando uma variavel para formatar meu menu de 3 pontinhos..fazer com que meu menu fique dentro dele.
var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});



// Iniciando meu script para o calculo de orçamento.
// Sempre que acontecer um evento de "change" nessa caixa de texto "qtde" ele atualiza o preço.

// Tratamento de evento
document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function (){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

// Criando a funcao de atualizar preço
function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value




    let  preco = qtde * 100;
    if (temJS) {
        preco = preco + (preco * 10/100) 
    }

    if (incluiLayout) {
        preco = preco + 500 
    }

    let taxaUrgencia = 1 - prazo * 0.1;
    preco *= 1 + taxaUrgencia
    document.querySelector("#preco").innerHTML = "R$" + preco.toFixed(2)

}
