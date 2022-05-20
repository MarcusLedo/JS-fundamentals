function outer(){
    let count = 0;

    function increment(){
        count++;
        return count;
    }

    increment();
    console.log(count);
    return increment;
}

const willThisWork = outer();
console.log(willThisWork());    //What?? 2?
console.log(willThisWork);


