/* 
Comente e descomente para verificar o comportamento do código, observação quando ocasionar erro o código não prossegue
 deve-se comentar a parte do código que está gerando erro 
 */

// Diferença entre as instância var, let, const. A sua utilização depende da aplicação do código

// Estudo de caso: const não altera valor
const x = 10;
var y = 20;
let z = 30;
// console.log("Antes de atribuir valor [x]: ", x)
// console.log("Antes de atribuir valor [y]: ", y)
// console.log("Antes de atribuir valor [z]: ", z)

// Estrutura para atribuir novo valor

// if(x>1) {
    //     x = 11
    // console.log("Inserido no bloco const [x]", x)
// }

// if(y>1) {
    // y = 21
    // console.log("Inserido no bloco var [y]", y)
// }

// if(z>1) {
//       z = 31
//     console.log("Inserido no bloco let [z]", z)
// }
// x=12
// y=22
// z=32

// console.log("Depois de atribuir valor [x]: ", x)
// console.log("Depois de atribuir valor [y]: ", y)
// console.log("Depois de atribuir valor [z]: ", z)

// Estudo de caso: Em estruturas de blocos var e let

function exibeBlocoLet(){
    const fixed = 10;

    if(fixed == 10){
        let detroDoBloco = 1;
        console.log(detroDoBloco) 
    }
    console.log(detroDoBloco) 
}
function exibeBlocoVar(){
    const fixed = 10;

    if(fixed == 10){
        var detroDoBloco = 1;
        console.log(detroDoBloco) 
    }
    console.log(detroDoBloco) 
}
// Em variável do tipo let fora do bloco não é reconhecida
// exibeBlocoLet()

// Em variável do tipo var é reconhecida, isso é possível pois está ocorrendo hoisting
exibeBlocoVar()

// HOISTING: É o içamento da variável ao topo do seu contexto antes da inicialização do código