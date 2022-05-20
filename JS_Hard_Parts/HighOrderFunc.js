const doSomethingWithMyArray = function(array, something){  //'something' espera receber uma funcionalidade como argumento
    const arr = [];

    for(let i = 0; i < array.length; i++){
        arr.push(something(array[i]));
    }
        
    return arr;
}

//const multiplyBy2 = function(x) {return x * 2;}     //Funcionalidade 1
const add3 = function(x) {return x + 3;}            //Funcionalidade 2
const multiplyBy2 = x => x * 2;
const myArray = [1, 2, 3];

const newArr = doSomethingWithMyArray(myArray, multiplyBy2);

console.log(newArr);