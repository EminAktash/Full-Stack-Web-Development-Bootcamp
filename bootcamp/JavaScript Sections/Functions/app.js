function singSong(){
    console.log('DO');
    console.log('RE');
    console.log('MI');
}
singSong()


function greet(firstName, lastName){
    console.log(`Hi, ${firstName} ${lastName[0]}.!`);
}

function repeat(word, times){
    let result = '';
    for(let i = 0; i < times;i++){
        result += word;
    }
    console.log(result);
}

function add(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
    return x + y;
}
function lastElement(arr){
    return arr[-1];
}
function capitalize(str){
    let firstLetterStr = str[0].toUpperCase();
    let otherLetters = str.slice(1);
    return firstLetterStr + otherLetters;
}

// let s = 'fjdskfjsd';
// let f = s[0].toUpperCase();
// let m = s.slice([1]);
const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

function returnDay(num){
    return days[num-1];
}