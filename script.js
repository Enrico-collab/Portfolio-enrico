// Criando uma variavel para formatar meu menu de 3 pontinhos..fazer com que meu menu fique dentro dele.
var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

