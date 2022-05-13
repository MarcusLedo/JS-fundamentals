const createMessageLimited = (a, b, c, d) => {
    return [[a, c], [b, d]];
}

const createMessage = (a, b, c, ...d) => {  // with the spread operator
    return [[a, c], [b, d]];                // ...d + the rest of the array
}

console.log(createMessageLimited('It', 'be', 'could', 'anyone', 'no one'));
// 'no one' it's not showing up, because there isn't a parameter 'e' to hold its value

console.log(createMessage('It', 'be', 'could', 'anyone', 'no one', 'me'));
// now 'no one' and 'me' is showing up because of the spread operator (line 6)
