try{
    let num = -2;
    if(num < 0)
        throw new Error("Não aceito numero negativo");

    console.log("Num: " + num);

} catch(e){
    console.log(`   ERRO!
    ${e.message}
    ${e.stack}`);

} finally{
    console.log("Hello World!");
}