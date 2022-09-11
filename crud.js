// JavaScript básico para CRUD

/*
Projeto visa o conhecer os comando básicos em JavaScript
para o entendimento de CRUD. Para analisar melhor comente e descomente a chamada das funções
*/ 

// Create, Read, Update, Delete (CRUD)

// const recebe os ARRAYS de objetos (usuarios e posts)
const miniRedeSocial = {

    // usuarios é uma lista de objeto, com atributo username e valor leonardoperes
    usuarios: [
        {
        username: "leonardoperes"
         }
    ],

    // posts é uma lista de objetos com atributos owner e content e valores
    posts: [
        {
        id: 1,    
        owner: 'leonardoperes',
        content: 'Meu primeiro post'
        } 
    ]
};

// CREATE

// Cria função criaPost recebe dados como parâmetro
function criaPost(dados){

    // acessa a rede social no objeto posts e adiciona (push)
    miniRedeSocial.posts.push({
        
        id: miniRedeSocial.posts.length + 1,
        // no atributo owner adiciona o dado que recebe na função
        owner: dados.owner,
        // no atributo content adiciona o dado que recebe na função
        content: dados.content

    });

}

// chama função criaPost enviando um objeto como parâmetro
criaPost({owner: 'leonardoperes', content:'Segundo post'});
criaPost({owner: 'leonardoperes', content:'Terceiro post'});
//console.log(miniRedeSocial.posts);

// READ
// função que retorna objeto posts
function lerPosts(){
    return miniRedeSocial.posts;
}


// UPDATE

// função que atualiza conteudo recebe 2 parâmetros
function updateContentPost(id, novoContent){

    // armazena na variável o post cujo id seja igual ao do parâmetro da função
    const postQueVaiSerAtualizado = lerPosts().find( (post) => {
        return post.id === id;
    });

    // o post cujo id é igual ao passado por parâmetro irá receber o novo conteúdo
    // que será passado por parâmetro pela função
    postQueVaiSerAtualizado.content = novoContent;
  
}
// chama função enviando id, e conteúdo atualizado
updateContentPost(2, 'Novo conteudo');


//DELETE

//Recebe id como parâmetro
function ApagaPost(id){
    
     // utilizado método splice primeiro argumento é o índice do array,
     // coletando o id e subtraimos um para deletar o INDICE do ARRAY
     // que é referente ao ID do post que queremos deletar
     miniRedeSocial.posts.splice(id-1, 1);
 
}
// chama a função enviando id do post que queremos deletar
ApagaPost(2);

console.log(lerPosts());