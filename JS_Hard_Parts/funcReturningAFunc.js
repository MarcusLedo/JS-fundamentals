function createFunction(){
    function multiplyBy2(num){
        return num * 2;
    }

    return multiplyBy2;
}

const geratedFunction = createFunction();
const result = geratedFunction(2);
console.log(result);