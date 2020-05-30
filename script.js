console.log("HELLO WORLD")
var texto = "200";
let vetor = [1,2,3,4,5,0,100];
let vetor1 = [1,"hello world",true,[1,2,40]];
let vetor2 = [11,22,433,50];
//altera o valor da primeira posição
vetor[0] = 9000;
//insere valor após ultimo elemento
vetor[5] = 7;
let x = null;
let y = 1;
y = null;
//undefined:este tipo de dado aparece quando criamos uma variavel
// e tentamos acessar seu valor antede ter atribuido algo a ela.
//let x;
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
// também é possivel passar valores para funcao acessar
let somar = function(valor1, valor2){
    let resultado = valor1 + valor2;
    console.log(resultado)
}
somar(1,2);
somar(4,4);
somar(93,1);
document.querySelector("#teste").innerHTML=somar(10+10)
//esse executara correto
 somar = function (valor1, valor2){
    let resultado = valor1+valor2;
    return resultado;
}
// esse NAO executara correto
somar=function(valor1,valor2){
    return valor1 + valor2;
    console.log(1);
}
 somar = function(v1,v2){
    let resultado = 1+2;
    console.log(resultado)
}
somar(1,2);
somar(4,4);
somar(99,1);

//retur

 somar = function(v1,v2){
    return v1 + v2;
}
let resultado = somar(10,10);
// retur faz com que a funcao seja uma ferramenta exelente para tornarmos
//nosso codigo mais simples de entender
// Este objeto não precisa ser mexido
let carro = {
    rodas: 4,
    portas: 2,
    cor: "cinza",
    ano: 2012,
    estado: "novo"
};


function mudarPropriedade(nomePropriedade, novoValor){
    switch(nomePropriedade){
        // O case rodas é um exemplo para as próximas partes
        case "rodas":
            if(novoValor > 1){
                carro.rodas = novoValor;    
            }
            else{
                return "Minimo de rodas precisa ser 2";
            }
            break;
        case "portas":
            // Para alterar as portas, é necessário que o
            // novo valor seja maior que 0
            // senão deve retornar a string "Minimo de portas precisa ser 1"
            if(novovalor > 0){
                carro.portas = novovalor;
            }else{
                return "Minimo de portas precisa ser 1"
            }
            break;
        case "cor":
            // para alterar a cor, novo valor pode ser igual a cinza ou preto ou vermelho
            // se for diferente, retornar "Cor invalida"
        if(novovalor = "cinza" || novovalor == "preto" || novovalor== "vermelho"){
        carro.cor = novovalor;
    }else{
    }return "cor invalida";
     break;
        // criar um case para o "ano"
        // alterar o ano do carro para o ano informado
        // se o ano for igual a 2019, alterar o estado para "novo" 
        // senao alterar o estado para "usado"
        case "ano":
            carro.ano = novoValor
            if(novoValor == 2019){
                carro.estado = "novo"
            }else{ carro.estado = "usado";
            }
            break;
            
            
       default:
       
            // retornar a fraase "Propriedade invalida";
    return"Propriedade invalida";
    
    // retornar a frase Alteracao concluida somente se foi possivel
    // alterar um dado do objeto.
    }
    return "Alteracao concluida";
}
//continuando... loops for of
console.log["----"];
console.log["for of"];
for(let aluno of){
    if(aluno.nota >7){
        console.log{"$(aluno.nome"} : passou");
    }
}
let carro = {
    rodas: 4,
    portas: 4,
    cor: "cinza",
    ano: 2012,
};
 let test = {
  rodas: null,
    portas: null,
    cor: null,
    ano: null,
}
function mudarPropriedade(nomePropriedade){
         if(carro.rodas > 1){
            test.rodas = carro.rodas;
         }else if(carro.rodas <= 1){
           console.log("Minimo de rodas precisa ser 2");
         }if (carro.portas >= 1){
           test.portas = carro.portas
         }else if(carro.portas == 0){
           console.log("Minimo de portas precisa ser 1");
         }if(carro.cor !== "cinza" || carro.cor !== "preto" || carro.cor !== "vermelho"){
           test.cor = "Pink"
         }else if(carro.cor == "cinza"){
           test.cor = carro.cor
         }if(carro.ano < 2019){
           test.ano = "usado"
         }else if(carro.ano >= 2019){
           carro.ano = "novo";
         }
    return "Alteracao concluida";
}
console.log(mudarPropriedade(carro));
console.log(test)