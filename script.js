'use strict';

/*
//selecting and manipulating elements using querySelector

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/


/*--------handling click event--------------*/
//event-is some thing that happens on a web page a click of button which can be handeled by eventlistners .i.e.. addEventListner(eventname,eventhandler)--->to handle this we should write a function which will handle  the event / event handler

/*generation the random secretNumber for user to guess*/
// const number = Math.trunc(Math.random()*21);
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

//adding eventlistner and event handler to check 
document.querySelector('.check').addEventListener('click',

//eventHandler
function (){

    //grtting the value user enters inside the input box cn='guess' and converting it to number
    const guess = Number(document.querySelector('.guess').value);
    // console.log(typeof guess,guess);


    //what to to do if user clicks check if input is empty
    if(!guess){
        displayMessage('⛔⛔no Number !!') 
    }
    
    //correct guess
    else if(guess === secretNumber){
        document.querySelector('.number').textContent=secretNumber;
        
        // document.querySelector('body').style.backgroundColor = "#60b347";

        // document.querySelector('.btn').style.cssText="background: #60b347; box-shadow:4px 4px 7px #52983c,-4px -4px 7px #6ece52;";

        // document.querySelector('.check').style.cssText="background: #60b347; box-shadow:4px 4px 7px #52983c,-4px -4px 7px #6ece52;";

        document.querySelector('.number').style.cssText="background: #60b347; width: 30rem";
        document.querySelector('.header').style.cssText="border:7px solid #60b347";



        displayMessage('✅🎉 Correct Number');

        //highscore
        if(score > highScore){

            highScore = score;

            document.querySelector('.highscore').textContent = highScore;
        }
    }
    

    //wrong guess
    else if(guess !== secretNumber){
            
        if(score > 1){

            displayMessage (guess > secretNumber ? 'Number is too high⬆️⬆️' : 'Number is too low⬇️⬇️');
            score--;
            document.querySelector('.score').textContent = score;

        }else{

            displayMessage( 'you lost the game 😪😣');
            document.querySelector('.score').textContent = 0;
            document.querySelector('.number').style.cssText="background: red; width: 30rem";

            document.querySelector('.header').style.cssText="border:7px solid red";
        }
    }
    // //guess is too high
    // else if(guess > secretNumber){

    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Number is too high';
    
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'you loose';

    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

    // //guess is too low
    // else if(guess < secretNumber){
    
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Number is too low';
    
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'you loose';

    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click',

function (){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent = score ;
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.cssText="background-color:#1a1a1a;"
    document.querySelector('.guess').value = '';
    displayMessage('Start Guessing..🤔💭');

    document.querySelector('.number').style.cssText="background: #1a1a1a; width: 15rem";

    document.querySelector('.header').style.cssText="border-bottom:7px solid #3f3f3f";
})