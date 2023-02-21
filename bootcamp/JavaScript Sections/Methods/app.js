const myMath = {
    Pi:3.14159,
    square(num){
        return num * num;
    },
    cube: function(num){
        return num ** 3;
    },
};

const cat = {
    name:'Blue',
    color: 'grey',
    breed:'scottish fold',
    meow(){
        console.log (`${this.name} says MEOW`);
    }
}

let meow2 = cat.meow;


