console.log("async functions");
// Conceito de função assícrona de uma maneira simplificada de se entender é análago a função de um garçom
// Realizamos um pedido a ele, ele vai pegar e retorna com o nosso pedido
// Observação: Se estamos em um restaurante cheio o pedido irá demorar mais se não irá chegar mais cedo
// Requisições HTTP é com base em funções assíncronas, pois "pedimos" ao servidor dados, depois de um tempo ele "retorna"

// Toda requisição tem 2 métodos que PRECISAM ser tratados no retorno
// Se eu peço um suco de laranja no restaurante e vem uma coca o pedido está errado!
// Sabendo disso quando enviamos requisições ao servidor precisamos certificar de que estão corretas!

// Utilizamos then() e catch()

// Vamos pedir um suco de laranja
async function getOrangeJuice(request) {
  let result;

  // Vamos esperar o servidor resolver para nós se tem ou não o suco (Simulação requisição HTTP)
  const process = await new Promise((resolve, reject) => {
    const juices = ["lemon", "pineapple", "orange"];
    setTimeout(() => {
      const check = juices.filter((juice) => juice === request)
      console.log(check)
      if(check.length> 0){
        resolve({
            code: 200,
            message: `YES WE HAVE YOUR JUICE 😁`
        })
      }else{
        reject({
            code:500,
            message: `SORRY WE DONT HAVE YOUR JUICE 😢`
        })
      }
    }, 2000);
  });

  // Olha parece que está pronto o resultado
  result = process;

  return result;
}

// Vamos utilizar nossa função assícrona para pedir o suco pro garçom [altere valor do parâmetro para testar]
getOrangeJuice('orange')
// Caso tenha o suco
.then((data)=> console.log(data.message))
// Caso não tenha o suco
.catch((error) => console.log(error.message))