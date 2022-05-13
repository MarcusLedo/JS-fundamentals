var a;              // Declarando uma variavel, normal.
const PI = 3.14;    //const - constante... duuu

//PI = 222; <- ERRO AO COMPILAR, não posso alterar uma constante depois de declarada


{
    let i = 16;     //let - só existe dentro do bloco, fora dele não.
    var j = 22;     // var irá continuar existindo fora do bloco

    console.log("DENTRO DO BLOCO i = " + i);
    console.log("DENTRO DO BLOCO j = " + j);
}

//console.log("FORA DO BLOCO i = " + i); <- ERRO AO EXECUTAR, i não existe fora do bloco
console.log("FORA DO BLOCO j = " + j);

{
    let think = 4;
    {
        {
            {
                let think2 = 43;
            }
        }
        console.log("think = " + think);
        //console.log("think = " + think2); ERRO!
    }
}