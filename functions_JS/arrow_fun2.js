let comparaComThis = function(x){
    console.log(this === x)
}

let comparaComThisArrow = (x) => {
    console.log(this === x)
}

comparaComThis(global)
comparaComThisArrow(global)