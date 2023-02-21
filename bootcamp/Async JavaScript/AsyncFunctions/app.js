// this code creates a promise

// async function hello(){

// }

// this code creates a promise as well
// const sing = async()=>{
//     throw new Error('ohohoh')
//     return 'alalal'
// }


// sing()
//     .then(data => {
//         console.log('promise resoleved with:',data)
//     })
//     .catch(err =>{
//         console.log('oh no, promise has been rejected')
//         console.log(err)
//     })

// const login = async(username,password) => {
//     if(!username || !password) throw 'missing credentials'
//     if (password === 'corgifeetarecute') return 'welcome'
//     throw 'invalid password'
// }

// login('asdfasdff')
// .then(msg  =>{
//     console.log('logged in')
//     console.log(msg)
// })
// .catch(err => {
//     console.log('Error!!!')
//     console.log(err)
// })

// const delayedColorChange = (color,delay)=>{
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             document.body.style.backgroundColor = color;
//             resolve();
//         },delay)
//     })
// }

// async function rainbow(){
//     await delayedColorChange('red',1000)
//     await delayedColorChange('orange',1000)
//     await delayedColorChange('yellow',1000)
//     await delayedColorChange('green',1000)
//     await delayedColorChange('blue',1000)
//     await delayedColorChange('indigo',1000)
//     await delayedColorChange('violet',1000)
//     return 'all done'
// }

// // rainbow().then(()=>console.log('end of rainbow'))

// //these are the same thing

// async function printRainbow(){
//     await rainbow();
//     console.log('End of Rainbow!')
// }

// printRainbow();

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(()=>{
            if(delay > 4000){
                reject('connection timeout :(');
            } else {
                resolve( `Here is your fake data from ${url}`);
            }

        }, delay)
    })
}

async function makeTwoRequest (){
    try {
        let data1 = await fakeRequest('/page1');
        let data2 = await fakeRequest('/page2');

        console.log(data1);
        console.log(data2);
    }catch (e){
        console.log('Caught an Error');
        console.log('error is :',e)
    }
    
}