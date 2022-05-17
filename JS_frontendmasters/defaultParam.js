//Can't use default parameters (ES6)


const add = function(a, b){
    if(b === undefined)
        b = 2;
    console.log(a, b);
}
// Ou
const add2 = function(a, b){
    b = b || 2;
    console.log(a, b);
}

add2(2);