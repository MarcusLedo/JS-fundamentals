const pessoa = {
    nome: "Marcus",
    idade: 5,
    endereco:{
        casa: 6,
        tipo: "casa"
    }
}

console.log(pessoa);

const {nome, idade} = pessoa; //Transformando nome e idade (de pessoas) em variaveis idependentes
//Destructuring ^
console.log(nome);
  
const {nome: n, idade: i} = pessoa//Personalizando os nomes
const {endereco:{casa: home, tipo}, idade: age} = pessoa;
console.log(home)

const myArray = [5, "Marcus", true];

console.log(myArray);

const {1: nm} = myArray;
console.log(nm);




function rand({max = 1000, min = 0}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {
    max: 44,
    min: 23
};

console.log(rand(obj))

function randArray([max = 1000, min = 0]){
    if(min > max) [max, min] = [min, max];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const myArr = [100, 110, 3, 5];
console.log(randArray([myArr[2], myArr[3]]))