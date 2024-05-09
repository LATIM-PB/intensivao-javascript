function calcularSoma() {
    // Obter os valores dos inputs
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    // Calcular a soma
    var soma = numero1 + numero2;

    // Exibir o resultado na tela
    document.getElementById('resultado').textContent = "O resultado da sua soma é: " + soma;
} 