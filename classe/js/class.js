// Construtor evidencia os parâmetros que a classe irá receber [recomendado]
// porém ela funciona caso não declaramos o construtor
class Person {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  //   id;
  //   name;
  //   age;
  nameReturn(name) {
    return name;
  }

  ageReturn(age) {
    if (typeof age !== "number") {
      return "Não é um número";
    } else {
      return age;
    }
  }
}

const person = new Person();
person.id = 1;
person.name = "Leo";
person.age = 30;

console.log(person.ageReturn(person.nome));
console.log(person.ageReturn(person.age));

// Podemos extender a classe de outras classes utilizando a palavra chave super
// A seguir dois exemplos onde extende a classe Person e quando declararmos o construtor colocamos qual propriedade queremos da classe PAI
// logo a classe Job irá obter dois parâmetros um vindo da classe Person [name] e outro da própria classe [job]

class Job extends Person {
  constructor(name, job) {
    super(name);
    this.job = job;
  }

  showPharse() {
    return `Meu nome é ${this.name} e atuo como ${this.job}`;
  }
}
const phraseArgs = new Job();
phraseArgs.job = "Developer";
// Note: Aqui acontece a herança de um parâmetro vindo da classe Person, não há nenhum parâmetro "name" na classe Job
// Chamamos o construtor, colocamos a prop que queremos herdar, e evidenciamos a prop pro super()
phraseArgs.name = "Leo"

const result1 = phraseArgs.showPharse();

console.log(result1);


// Esse exemplo herdamos name e o método [nameOfAnimal] da classe Animal
class Animal {
    constructor(name){
        this.name = name
    }
    nameOfAnimal(){
        return this.name
    }
}
class Noise extends Animal{
    constructor(name, noise){
        super()
        super.name = name
        this.noise = noise;
    }
    makeNoise(){
        return this.noise
    }
    animalName(){
        return super.nameOfAnimal()
    }
}

// Instancia da classe Noise
const animal = new Noise("cat","miau")
console.log(animal.name)
console.log(animal.makeNoise())
console.log(animal.animalName())