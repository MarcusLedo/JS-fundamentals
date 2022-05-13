//Armazenando uma funçao em uma variavel

const printSum = function(a, b){
    console.log(a + b);
};

printSum(2, 3);

//Armazenando uma funcao arrow em uma variavel (forma reduzida)
const soma = (a, b) => {
    return a + b;
};
//Sintaxe: tipo(var, let, const) <nome> = parametros =>

//Funçao arrow mais retorno implicito

const subtracao = (a, b) => a - b;
//Só funciona qaundo a funçao tem uma linha, essa linha será seu return

console.log(subtracao(10, 6));

console.log(this.toString());