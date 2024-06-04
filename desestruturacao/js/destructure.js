/* 
Comente e descomente para verificar o comportamento do código, observação quando ocasionar erro o código não prossegue
 deve-se comentar a parte do código que está gerando erro 
 */

const obj = {
  name: "Leo",
  job: "Developer",
  age: 99,
}

console.log(obj.name)
console.log(obj.job)
console.log(obj.age)

// Utilizando desestruturação
const {name, job, age} = obj
console.log(name)
console.log(job)
console.log(age)

// Em casos de várias propriedades no objeto se torna mais claro o código e evita a verbosidade
const obj1= {
    name: "Leo",
    age: 99,
    dateCreated: new Date().getTime(),
    admin: true,
    color: "white",
    song: "Disturbed - The sound of silence",
    sport: "Futebol"
}

// Para evitar declaraçoes de variáveis no mesmo escopo, renomeie para "nameObj1", "ageObje1", utilizando a sintaxe de "chave":"valor"
const {name: nameObj1, age: ageObje1, dateCreated, admin, color, song, sport} = obj1
console.log(
    "name", nameObj1,
    "age", ageObje1,
    "dateCreated", dateCreated,
    "admin", admin,
    "color", color,
    "song", song,
    "sport", sport
)

console.log([
     obj,
     obj1
])

// É possivel realizar a mesma desestruturação em arrays
const fruits = ["apple", "banana", "lemon"]
// const [apple, banana, lemon] = fruits

// console.log(apple)
// console.log(banana)
// console.log(lemon)

// É possível renomear os valores também
const [a, b, c] = fruits
console.log(a)
console.log(b)
console.log(c)