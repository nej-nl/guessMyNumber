'use strict';

let score = 20; //state variable
let highscore = 0;

//Define secret number outside of button handler function, cause I only want it to be defined once, only at start of the application. If the secret number was inside the function, then on each click I would get a new secret number and it would not work. 

 let secretNumber = Math.trunc(Math.random()*20)+1; //state variable
 //document.querySelector('.number').textContent = secretNumber;//display "guess number" while in development.

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
let guess = Number (document.querySelector('.guess').value);
console.log(guess, typeof guess);

//It is the js engine, who will call this anonymous function (function expression - cause it has no name) as soon as the event happens. Is not called immediately. Also, using console.log(typeof guess) shows in console that the guess is a string not a number. Need to convert string to a Number. Using Number function.

//When there is no input
if(!guess) {
    //document.querySelector('.message').textContent = '⛔️ Not a Number!';
    displayMessage('⛔️ Not a Number!');

//When play wins
} else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
        //When manipulating css style, always need to specify a string and in there we have a number and unit. This is inline style, not changing the css file. Have to use camelCase in js, even if written different in css ie background-color in css, needs to be written backgroundColor in js. 
    document.querySelector('body').style.backgroundColor = '#60b347'; 
    document.querySelector('.number').style.width = '30rem';

if(score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
}

//When guess is wrong. Below shows the refactored code. 
} else if (guess !== secretNumber) {
    if (score > 1) {
        //document.querySelector('.message').textContent = guess > secretNumber ?'⬆️ Number is too high!' : '⬇️ Number is too low!';
        displayMessage(guess > secretNumber ?'⬆️ Number is too high!' : '⬇️ Number is too low!');
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        //document.querySelector('.message').textContent = '💥 You Lost!';
        displayMessage('💥 You Lost!');
        document.querySelector('.score').textContent = 0;
    }

//When guess is too high
/*} else if (guess > secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = '⬆️ Number is too high!';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '💥 You Lost!';
        document.querySelector('.score').textContent = 0;
    }

//When guess is too low
} else if (guess < secretNumber) {
    if(score > 1) {
    document.querySelector('.message').textContent = '⬇️ Number is too low!';
    score--;
    document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '💥 You lost!';
        document.querySelector('.score').textContent = 0;
    }
    */
}

}); 

// Starting a new game, with Again! button, without reloading browser
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

//document.querySelector('.message').textContent = 'Start guessing...';
displayMessage('Start guessing...');
document.querySelector('.score').textContent = score;

document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';

document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';

});