const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log('You clicked me!')
}

function scream(){
    console.log('ahh')
    console.log('stop touching me')
}


btn.onmouseenter = scream;

document.querySelector('h1').onclick = () =>{
    alert('you clicked the h1')
}

const btn3 =  document.querySelector('#v3');
btn3.addEventListener('dblclick',function(){
    alert('clicked')
})

function twist(){
    console.log('TWIST!')
}

function shout(){
    console.log('SHOUT!')
}

const tas = document.querySelector('#tas');
// tas.onclick = twist;
// tas.onclick = shout;

tas.addEventListener('click',twist)
tas.addEventListener('click',shout)