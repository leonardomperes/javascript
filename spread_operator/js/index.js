console.log("Spread Operator");
const numbers = [1, 2, 3];

function sum3Values(a, b, c) {
  return a + b + c;
}

const result = sum3Values(...numbers);
console.log(result);

// Em aplicações reais há casos em que há muitos valores a serem passados para uma função
// O spread ajuda a copiar todos

const profile = [
  { name: "Leo" },
  { song: "silence" },
  { id: 1 },
  { admin: true },
  { color: "white" },
];

const letters = ["a", "b", "c"];

const newArrayWithAllThings = [...numbers, ...letters, ...profile];
console.log(newArrayWithAllThings);

console.log("Com objetos, junta propriedades diferentes se forem iguais não");

const obj1 = {name: "João", isAdmin: false};
// const obj2 = { nickName: "Leo", age: 30 };
const obj2 = { name: "Leo", age: 30 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
