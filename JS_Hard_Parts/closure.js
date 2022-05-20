function outer() {
    let count = 0;

    function increment() {return ++count;}

    return increment;
}

const myFunc = outer();             //Bakcpack 1
console.log(myFunc());
console.log(myFunc());

const anotherFunc = outer();        //Bakcpack 2
console.log(anotherFunc());
console.log(anotherFunc());

// Duas backpacks diferentes, pois foram criadas através de contextos de execução diferentes
//Backpacks Individuais!!!