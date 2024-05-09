//Atribuindo notas 
const nota1 = 8
const nota2 = 9
const nota3 = 5

//Cauculando media 
media = (nota1 + nota2 + nota3) / 3 

//Verificando situação do aluno 
if (media >= 7){
    console.log("Aluno Aprovado")
} else if(media >= 5 && media < 7) {
    console.log("Aluno está na prova final")
} else { 
 console.log("Aluno reprovado")
} 
