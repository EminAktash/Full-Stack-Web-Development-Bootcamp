// const password = prompt('Enter your password');

// if (password.length >= 6 && password.indexOf(' ') === -1){
//     console.log('Valid Password');
// } else {
//     console.log('incorrect password')
// }

// const age = prompt('enter your age');

// if(age >= 0 && age < 5 || age >= 65){
//     console.log('Free');
// } else if (age >= 5 && age < 10 ){
//     console.log('$10');
// } else if (age < 65 ){
//     console.log('$20')
// } else {
//     console.log('invalid age')
// }

const firstName = prompt('enter your first name');

if (!firstName){ //if the user didn't type anything
    firstName = prompt('try again')
}