/*escreval("Digite o nome do aluno:")
leia(nome)
escreval("Digite a nota 1 do aluno:")
leia(nota01)
escreval("Digite a nota 2 do aluno:")
leia(nota02)

media := (nota01 + nota02) / 2

se media >= 5 entao
   escreval("Aprovado ", nome)
senao
   escreval("Reprovado ", nome)
fimse*/

var nome, nota1, nota2;
nome = prompt("Digite o nome do aluno: ");
nota1 = prompt("Digite a nota 1 do aluno: ");
nota2 = prompt("Digite a nota 2 do aluno: ");

media = (parseInt(nota1)+parseInt(nota2))/2

if(media >= 50)
    alert("Aprovado" + nome)
else
    alert("Reprovado" + nome)