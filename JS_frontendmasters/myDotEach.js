function createSusObject (name){
    return {
        myName: name,
        color: name.split(" ") [1],
        speak (){
            console.log("Hello, my name is " + this.myName + " and my color is " + this.color);
        }
    };
}

//var callback = (name, index) => console.log(index + 1 + '. ' + name);

var _ = {};

_.each = (list, callback) =>{
    if(Array.isArray(list)){
        for(let i = 0; i < list.length; i++)
            callback(list[i], i, list);
    }else{      //object
        for(var key in list)
            callback(list[key], key, list);
        
    }
}


var susPeople = ["Mr brown", "Mrs Scarlet", "Mr White", "Colonel Mustard"];
var objArr = [];

_.each(susPeople, (name) =>{
    suspect = createSusObject(name);
    objArr.push(suspect);
});

objArr[3].speak();