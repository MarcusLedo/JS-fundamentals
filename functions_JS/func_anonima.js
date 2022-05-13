const soma = (x, y) => x + y;

const imprimirResult = function (a, b, operacao = soma){
    console.log(operacao(a, b));
}

imprimirResult(3, 4);

imprimirResult(3, 4, (x, y) => x - y);