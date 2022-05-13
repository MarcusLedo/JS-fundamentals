const pessoa = {
    suadacao: 'Bom dia!',
    falar(){
        console.log(this);
    }
};

pessoa.falar();

const falar = pessoa.falar;

falar(); //Conflito de paradigmas: fucnional Vs OOP
//é uma função, ou seja, a palavra this faz referencia ao global nesse caso, não pessoa

//Como resolver isso? Usano da func .bind

const falarDePessoa = pessoa.falar.bind(pessoa); //Com o bind, definimos manualmente quem a palavra this faz referencia.

falarDePessoa();
