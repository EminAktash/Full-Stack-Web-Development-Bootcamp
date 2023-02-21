// function callTwice(func){
//     func();
//     func();    
// }

// function callTenTimes(f){
//     for(let i = 0; i < 10;i++){
//         f();
//     }
// }

// function rollDie(){
//     const roll = Math.floor(Math.random() * 10) + 1;
//     console.log(roll);
// }

// callTenTimes(rollDie);

// function makeMysteryFunc(){
//     const rand = Math.random();
//     if (rand > 0.5){
//         return function(){
//             console.log('congrats, i am a good function')
//         }
//     }else{
//         return function(){
//             alert('you have been afected by a computer virus')
//             alert('stop trying to close this window')
//             alert('stop trying to close this window')
//             alert('stop trying to close this window')
//             alert('stop trying to close this window')
//             alert('stop trying to close this window')
//             alert('stop trying to close this window')
//             alert('stop trying to close this window')
//             alert('stop trying to close this window')
//             alert('stop trying to close this window')
//             alert('stop trying to close this window')
//             alert('stop trying to close this window')
//         }
//     }
// }

function makeBetweenFunc(min,max){
    return function(num){
        return num >= min && num <= max;
    }
}


// function isBetween (num){
//     return num >= 50 && num <= 100;
// }

// function isBetween2 (num){
//     return num >= 1 && num <= 10;
// }