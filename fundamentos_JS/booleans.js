var isAtivo = true;

console.log(isAtivo);

isAtivo = 1;    //Tipagem fraca, o isAtivo agora é um number

console.log(isAtivo);

console.log(!!isAtivo); //Transformando number em boolean(true & false), negação dupla (~~)

/*
    ->Falsos:
        !!0
        !!''    (String vazia)
        !!null
        !!NaN   (Not A Number)
        !!undefined
*/

var nome = '';
console.log(nome || 'Desconhecido') //-> Se nome estiver vazio (falso, linha 14) imprima/atribua desconhecido
