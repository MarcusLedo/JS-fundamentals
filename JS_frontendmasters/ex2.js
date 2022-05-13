let clue = {
    "name" : "Rusty",
    "room" : "kitchen",
    "weapon" : "candlestick"
};

let [weapon, location] = [clue.weapon, clue.room];

console.log("Clues: " + weapon + " & " + location);

const {weapon: w, room: r} = clue;

console.log("Weapon: " + w + "\n" + "Room: " + r);

const game = {};

game.sus = [];

game.sus.push({name: "Mr. White", weapon: "Revolver"}, {name: "Rusty", weapon: "Knife"});

for(let i = 0; i < game.sus.length; i++){
    console.log(game.sus[i]);
}

console.log("\n");

for(let i = 0; i < game.sus.length; i++){
    for(atributo in game.sus[i]){
        console.log(typeof(atributo));
        console.log(atributo + " = " + game.sus[i][atributo]);
    }
}

/*
for(let i = 0; i < game.sus.length; i++){
    console.log("SUSPECT #", (i + 1));
    console.log("Name: " + game.sus[i].name);
    console.log("Weapon: " + game.sus[i].weapon);

    if(game.sus[i].weapon == "Knife")
        game.sus[i].guilty = true;
    else
        game.sus[i].guilty = false;

    console.log("Guilty: " + game.sus[i].guilty);
    console.log("\n");
}
*/

var [weapon1, weapon2] = [game.sus[0].weapon, game.sus[1].weapon];

var [{weapon: w1}, {weapon: w2}] = game.sus;
//  [       0    ,        1    ]

console.log(w1, w2);