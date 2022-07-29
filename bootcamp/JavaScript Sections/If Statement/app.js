// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5");
//     console.log(random);
// } else {
//     console.log("YOUR NUMBER IS GREATER THAN 0.5");
//     console.log(random);
// }


// const dayOfWeek = prompt('Enter A Day');

// if (dayOfWeek === 'Monday'){
//     console.log("ughhhh i hate Mondays");
// } else if (dayOfWeek === 'Saturday'){
//     console.log("yay I love saturdays");
// } else if (dayOfWeek === 'Friday'){
//     console.log("fridays are decent, especially after work");
// } else {
//     console.log("MEH");
// }

// const age =10;

// if (age < 5){
//     console.log("You are a baby. You can get it for free");

// } else if (age < 10) {
//     console.log("You are a child. You pay 10$");
// } else if (age < 65){
//     console.log("You are an adult. You pay 20$");
// } else{
//     console.log("You are a senior. You pay 10$");
// }

const password = prompt("please enter a new password");

if (password.length >= 6){
    console.log('Long enough password');
    if (password.indexOf(" ") === -1){
        console.log('Valid password');
    }else{
        console.log('Password cannot contain spaces');
    }
}else {
    console.log('Password is not long enough');
}