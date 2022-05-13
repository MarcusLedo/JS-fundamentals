let _ = require('underscore'); // npm install underscore

function createSusObject (name){
    return {
        myName: name,
        color: name.split(" ") [1],
        speak (){
            console.log("Hello, my name is " + this.myName + " and my color is " + this.color);
        }
    };
}

var susPeople = ["Mr brown", "Mrs Scarlet", "Mr White", "Colonel Mustard"];
var objArr = [];

_.each(susPeople, (name, i) => {
    let susObj = createSusObject(name);
    console.log(i);
    objArr.push(susObj);
})

objArr[2].speak();