//http://csbin.io/async
//CHALLENGE 6
/*
    Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, 
    and another number duration.

    everyXsecsForYsecs will execute the given function every interval number of milliseconds, but 
    then automatically stop after duration milliseconds.
    
    Then pass the below sayHi function into an invocation of everyXsecsForYsecs with 1000 interval time an 5000 duration time.
    What do you expect to happen?  
*/

function everyXsecsForYsecs(func, interval, duration) {
    let startDate = new Date();

    let myInterval = setInterval(() => {
        if(new Date() - startDate <= (duration * 1000))
            func();
        else
            clearInterval(myInterval);
    }, interval*1000);
}


// Uncomment the following lines to check your work!
 function theEnd() {
   console.log('This is the end!');
 }
 everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!