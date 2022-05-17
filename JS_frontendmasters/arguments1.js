const spellCasting = (spellType) => {
    console.log(arguments);
    console.log(spellType);
}

const spells = ['fire', 'ice', 'wind', 'void'];

for(let i = 0; i < spells.length; i++)
    spellCasting(spells[i]);