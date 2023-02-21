 document.querySelector('button').addEventListener('click',function(evt){
    console.log(evt)
 })

 const input = document.querySelector('input');
 input.addEventListener('keydown',function(evt){
    console.log(evt.key)
    console.log(evt.code)
 })
//  input.addEventListener('keyup',function(){
//     console.log('keyUp')
//  })