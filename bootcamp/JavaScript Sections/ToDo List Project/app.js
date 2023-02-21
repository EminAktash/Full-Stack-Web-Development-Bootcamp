let input = prompt('What would you like to do?');
const todo = [];


while(input !== 'quit' && input !== 'q'){
    
    if (input === 'list'){
        console.log('*****************');
        for (let i = 0; i < todo.length;i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log('*****************');
    } else if (input === 'new'){
        const newTodo = prompt('Ok, What is the new ToDo');
        todo.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === 'delete'){
        const index = parseInt(prompt('Ok, enter an index to delete!'));
        if (!Number.isNaN(index)){
            const deleted = todo.splice(index, 1);
            console.log(`Ok, you deleted ${deleted[0]}`)
        } else{
            console.log(`Unknown index`);
        }
        
    }
    input = prompt('What would you like to do?');

}
console.log('OK, YOU QUIT THE APP');

