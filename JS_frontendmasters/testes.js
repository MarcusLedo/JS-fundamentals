var person = [];

person.push({name: "Marcus", id: 22}, {name: "Pedro", id: 33});

var [{id: id1}, {id: id2}] = person;
//  id: posição 0 , id: posição 1
//     nick: id1    nick: id2

console.log(id1, id2);

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

for(let i = 0; i < susPeople.length; i++){
    objArr.push(createSusObject(susPeople[i]));
    objArr[i].speak();
}