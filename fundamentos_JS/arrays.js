const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[2]);
console.log(valores[5]);     //Não dá erro, imprime "undefined"

valores[4] = 99;    //inserindo um elemento em uma posicao especifica

console.log(valores);
console.log(valores.length);


valores.push("MARCUS", 23, "oi");   //Inserindo nas ultimas posições do array
console.log(valores);

console.log(valores.pop()) //Remove e imprime o ultimo elemento inserido
console.log(valores);

delete valores[5];      //Deletando valores especificos, deletando "MARCUS"
console.log(valores);

console.log(typeof valores);    //Array é do tipo objeto


/*
    Pergunta.: Se a variavel "valores" é do tipo const, como estamos alterando o seu valor?

    Resposta.: Bom, não estamos. Lembrando, o vetor aponta para um endereço de memória.
    Em nenhum momento alteramos o local para onde o vetor aponta. O que foi alterado foi
    o conteúdo daquele endereço de memória.


*/