console.log("a = ", a); //a = undefined, mas como? a não foi nem declarado nesse ponto
var a = 2;
console.log("a = ", a);

//Reposta: Hoisting. O JS puxa a declaração para o topo do código/bloco, ou seja
//         var a; foi puxado para o topo do bloco
//          O  HOISTING SÓ ACONTECE COM O VAR!!!!!!