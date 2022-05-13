const produto1 = {};    //Chaves "{}" indicam a criação de um objeto, semelhante ao [] na criação de um array
//Lembra uma struct
produto1.nome = "Celular Barato";   //Criando o campo nome de maneira dinâmica
produto1.preco = 399.99;

console.log(produto1);


const produto2 = {
    nome: "PS5",
    preco: 4.700
};                  //Lembra mais ainda uma struct!

const produto3 = {
    nome: "PS4",
    preco: 2.499,
    obj: {
        nome: "Objeto dentro de um ojeto",
        comentario: "WAYTOODANK"
    }
};

const myObj = {
    'nome': "Bola", //mesma coisa
    nome: "marcus"  // mesma coisa (sobreescrevendo)
};

console.log(myObj);

console.log(produto3);man 