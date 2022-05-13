const printI = [];

for(let i = 0; i < 10; i++){
    printI.push(function(){ // printI[i] = function(){...
        console.log(i);
    })
}

printI[2]();

