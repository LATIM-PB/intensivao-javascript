// Definindo um objeto com um método
var carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    exibirInfo: function() {
        return this.marca + " " + this.modelo + " " + this.ano;
    }
};

// Chamando o método do objeto
console.log(carro.exibirInfo()); // Saída: Toyota Corolla 2020 