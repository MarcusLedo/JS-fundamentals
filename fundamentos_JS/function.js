//Função sem retorno
function printSum(a, b){
    console.log(a + b);
}

printSum(3, 2);
printSum(3);    //Somando 3 + Undefined = NaN

//Função com retorno
function sum(a, b = 0){ //o campo 'b' recebe o valor padrão 0, caso não seja passado um
    return a + b;
}

console.log(sum(5, 6));
console.log(sum(5));