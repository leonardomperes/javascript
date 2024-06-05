/* 
    Comente e descomente para verificar o comportamento do código, observação quando ocasionar erro o código não prossegue
    deve-se comentar a parte do código que está gerando erro 
 */

// Sinxtaxe de uma função
function exFunction() {}

// Executa a função
exFunction();

// Envio de parâmetros
function soma(a, b) {
  a + b;

  // return (
  //     a+b
  // )

  // return a+b

  //   return ({
  //     result: a+b,
  //     name: "Leo",
  //     job: "Developer"
  //   });
}

// Para que seja possível receber os valores é a palavra chave return para que a função retorne o que desejar,
// Caso não possua o return o valor é undefined
const result = soma(2, 2);

console.log(result);

// Há dois tipos de funções: funções sícronas e  funções assíncronas
// Definimos uma função como sendo assícrona pela sintaxe a seguir
async function waitSum(a, b) {

  const res = await new Promise((resolve,reject) =>{
    setTimeout(() => {
       resolve(a+b)
      }, 4000)
  })
    
  return res
}

waitSum(2, 3).then((result) => console.log(result))

// Função síncrona é toda função que não depende de requisições externas, exemplo soma de dois números.
// Quando estiver com dúvida leia a documentação da função que irá utilizar as assíncronas vão estar como retorno Promise<any>

// Conceitos mais intermediários e avançados estarão em pastas específicas onde irei trazer mais detalhes segundo o título da pasta

