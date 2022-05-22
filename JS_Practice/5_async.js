//http://csbin.io/async
//CHALLENGE 5
/*
    Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research 
    how to use clearInterval if you are not sure how to do this.
*/

function myInterval(){
    var time = 1;

    if(time <= 5){
        console.log('Hello for now');
        time++;
    } else{
        clearInterval();
    }

}

function limitedRepeat() {
    let startDate = new Date();
    let interval = setInterval(() => {
        if(new Date() - startDate <= 5000){
            console.log('Hello for now.');
        } else{
            clearInterval(interval);
        }
    }, 1000);
}

limitedRepeat();
