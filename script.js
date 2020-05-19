console.log("HELLO WORLD")
var texto = "200";
let vetor = [1,2,3,4,5,0,100];
let vetor = [1,"hello world",true,[1,2,40]];
let vetor = [11,22,433,50];
//altera o valor da primeira posição
vetor[0] = 9000;
//insere valor após ultimo elemento
vetor[5] = 7;
let x = null;
let y = 1;
y = null;
//undefined:este tipo de dado aparece quando criamos uma variavel
// e tentamos acessar seu valor antede ter atribuido algo a ela.
let x;
console.log(x);
// undefined é diferente de null
console.log (null === undefined);
//resumidamente, isto ocorre pois NULL ainda é um valor e UNDEFINED é quando JS 
//nao sabe qual o tippo de dado.
//funçoes: as funcoes sao utilizadas para criarmos uma sequencia de operaçoes
//para serem executadas^.
let helloworld = function(){
    console.log("hello world");
    console.log("hello world again");
    console.log("hello world once again");
}
helloworld();
//note que para fazer a funcao executar, vc precisa chama-la com os parenteses.