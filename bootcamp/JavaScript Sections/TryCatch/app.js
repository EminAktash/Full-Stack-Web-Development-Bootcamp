

// try{
//     hello.toUpperCase();
// }catch{
//     console.log('Erooorrrrr!!!!!!!')
// }

// console.log('AfTER THE ERROR')

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log('Please use a string next time');
    }
    
}