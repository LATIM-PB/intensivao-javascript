console.log("Hello World")
 
//Seleciona o elemento por id 
var btn = document.getElementById('btn') 

// Adicionando evento ao botao 
btn.onclick = function(cliqueBotao){
    alert("Voce clicou no botão")
    console.log("O botão foi clicado")
} 
