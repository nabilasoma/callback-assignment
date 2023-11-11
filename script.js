// setTimeout() with Callback:

function delayedGreeting(callback){
    setTimeout(function(){
        callback();
        for(let i = 0; i < 100; i++){
            console.log(i)
        }
     
    }, 2000);
   
}


function sayGoodBye(){
    console.log('Goodbye')
}

delayedGreeting(sayGoodBye);



// Event Handling with Callback:

const myButton = document.getElementById('myButton');
const number = [1, 2, 7, 45, 88, 32];
const showMe = document.getElementById('showMe');

myButton.addEventListener('click', function(){
    showMe.innerHTML = number;
});


// Array's forEach() with Callback:

const newNum = [1, 2, 3, 45, 66];

newNum.forEach(function(index, value, arr){
    console.log(index, value, arr);
});




