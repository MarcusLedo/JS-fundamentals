function soma(){    //Função sem parametros
    let sum = 0;
    for(i in arguments){    //Arguments é um array intenro de todos os parametros passados para a função
        sum += arguments[i];
    }

    return sum;
}

/* Mesmo se a função não estiver esperando por nenhum parametro,
ainda podemos passar parametros para função, esses parametros
podem ser acessados pelo o array arguments */


function soma2(a = 1, b = 1, c = 1){ //Parametro com valor padrão
    return a + b + c;
}

/* caso a função seja invocada sem os parametroes esperados, 
a função irá substituir pelo o valor padrão */


let resultado = soma(3, 4, 6, 6, 6);

console.log(resultado);
console.log(soma2());
console.log(soma2(2));