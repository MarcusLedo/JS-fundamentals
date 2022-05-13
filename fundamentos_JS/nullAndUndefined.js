let a;
var b;
var array = [];

console.log(a);         //Undefined
console.log(b);         //Undefined
console.log(array[2]);  //Undefined

array = null;
b = null;
console.log(array);
console.log(b);

/*
    -> Passagem por valor: uma copia da variavel
    -> Passagem por referenica: mesmo endereço da variavel, ou seja
    a própria variavel.
*/