// console.log('Hello')
// setTimeout(()=> {
//     console.log('... are you still there?')
// }, 3000);

// setTimeout(()=> {
//     console.log('Goodbye')
// },1000);

const id = setInterval(()=>{
    console.log(Math.floor(Math.random()*10) + 1)
},2000);

// clearInterval(id)