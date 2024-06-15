console.log("Observer");
// É um design pattern no qual o observador atualiza dados para todos que estiverem inscritos "subscribe" no observador

// Classe que simula o envio de messagem para posterior envio de email
// onde a pessoa inscrita terá um padrão sendo 
/* 
    {
        id: number,
        name: string,
        message: string    
    }
*/
class emailObserver {
  constructor() {
    this.persons = [];
  }

  // Assinatura para receber emails
  subscribe(person) {
    this.persons.push(person);
  }
  // exclusão de assinatura para não receber email
  unsubscribe(cancelPersonId) {
    this.persons = this.persons.filter(
      (person) => person.id !== cancelPersonId
    );
  }

  // Envia mensagem para todos os inscritos
  notify(message) {
    this.persons.forEach((person) => person.message.push(message));
  }

// Mostra mensagens que foram enviadas ao inscritos
show(){
    this.persons.forEach((person) => console.log(person))
}
}

// Quero enviar uma mesagem padrão para muitas pessoas
const message = "Olá seja bem vindo ao observer!"

// Instancio a classe observadora como "person"
const person = new emailObserver();

// Realizo a inscrição das pessoas para receber a messagem
person.subscribe({ id: 1, name: "Person 1", email: "person1@email.com", message:[]});
person.subscribe({ id: 2, name: "Person 2", email: "person2@email.com", message:[]});
person.subscribe({ id: 3,name: "Person 3", email: "person3@email.com", message:[]});

// Envio a messagem padrão para todos
person.notify(message);

// Emite no console o resultado apenas para o entendimento
person.show()

console.log("Ao excluir inscrito")

// Exclui uma pessoa passando o id
person.unsubscribe(2)

// Crio uma nova mensagem padrão 
const message2 ="Apenas id 1 e id 3 recebem"

// Notifico todos os inscritos, note que o id:2 não está mais inscrito
person.notify(message2)
person.show()

// O interessante é que ao atualizar os inscritos a primeira vez notamos no CONSOLE é que
// nas pessoas de id: 1 e 3 estão com as duas mensagens e o id 2 está com a primeira mensagem apenas
