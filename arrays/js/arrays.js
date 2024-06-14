console.log('Arrays')
const arrayUniqueType = [0,1,2,3,4,5,6,7,8,9]
const arrayMultipleTypes = [1,"a", true, {name: "Leo", job: "developer"}, new Date()]

console.log(arrayUniqueType)
console.log(arrayMultipleTypes)
// Podemos acessar cada item do array através do seu índice
const result = arrayUniqueType[3]
console.log("result index[3]", result)
// Em estruturas do tipo array é comum utilizar funções para percorrer e realizar mudanças nos resultados

// map: Possui retorno, não alterando o array principal
const mapResult = arrayUniqueType.map((value) =>  value + 10 )
console.log(mapResult)

// forEach: Não possui retorno, utilzado para comparações, não alterando o array principal
const returnForEach = arrayUniqueType.forEach((x) => {
    if(x == 3){
        console.log(`exibe em tela opção ${x}`)
    }
})
console.log(returnForEach)
console.log("Não alterado", arrayUniqueType)

// filter: filtra de acordo com a lógica empregada
const filteredResult = arrayMultipleTypes.filter((element) =>{
    if(typeof(element) == "object"){
        return element
    }
})
console.log(filteredResult)


// reduce: cria um unico valor com base no array, possui dois parametros acumulador e o valor atual
const reduceResult = arrayUniqueType.reduce((acumulator, currentValue) =>{
   return acumulator + currentValue
})
console.log(reduceResult)

// push: adiciona item no final do array
const exampleArray = [1,2,3]
const pushResult = exampleArray.push(10)
console.log(exampleArray)

// reverse: inverte valores do array
const reverseArray = exampleArray.reverse()
console.log(reverseArray)

// pop: exclui último elemento do array
const popArray =  exampleArray.pop()
console.log(exampleArray)