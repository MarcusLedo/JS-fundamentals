function exibir(x){
    console.log("Resultado = " + x);
}

function soma(a, b, callback = exibir){
    let result = a + b;
    callback(result); //executando uma outra função após uma ação (soma)
}

function multi(a, b, callback = exibir){
    let result = a * b;
    callback(result); //executando uma outra função após uma ação (multiplicação)
}

soma(5, 6);
multi(4, 3);