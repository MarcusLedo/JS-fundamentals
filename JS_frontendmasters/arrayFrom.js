const putIntoAnArray = function() {
    const array = Array.from(arguments);
    array.push('???');
    return array.join(' ');

}

const myPutIntoAnArray = function(){
    const array = [];
    for(let i = 0; i < arguments.length; i++)
        array.push(arguments[i]);

    array.push('???');
    return array.join(' ');
}

//console.log(putIntoAnArray('Who', 'are', 'you'));
console.log(myPutIntoAnArray('Who', 'are', 'you'));