// let count = 0;
// while (count < 10){
//     count ++;
//     console.log(count);
// }

// const Secret = 'BabyHippo';

// let guess = prompt('enter the secret code ...');

// while (guess !== Secret){
//     guess = prompt("try again");
// }
// console.log("you got the secret");

// let input = prompt('say something');

// while (true) {
//     input = prompt(input);
//     if (input === 'stop'){
//         break;
//     }
// }
// console.log('ok, you win');

let maxNum = parseInt(prompt('enter your maximum number: '));
while(!maxNum){
    maxNum = parseInt(prompt('enter a valid maximum number: '));
}
const randomNum = Math.floor((Math.random() * maxNum) + 1);
let guess = parseInt(prompt('enter your first guess!'));
let count = 1;
 while (parseInt(guess) !== randomNum){
    if (guess === 'q') break;
    count ++;
    if (guess > randomNum){
        guess = prompt('Too high! Enter a new guess:');
    } else{
        guess = prompt('Too low! Enter a new guess:');
    }
    
 }
 if (guess === 'q'){
    console.log('OK, YOU QUIT!');
 }else{
    console.log('You got it');
    console.log(`it took you ${count} guesses`);
 }
 
