// const add = function(x,y){
//     return x + y;
// }

// function add(x,y){
//     return x + y;
// }

const add = (x,y) => {
    return x + y;
}

const square = x =>{
    return x ** 2;
}

const rollDie = () =>{
    return Math.floor(Math.random() * 10) + 1;
}

const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
)

const add2 = (a,b) => a + b;

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const newMovies = movies.map(function (movie){
    return `${movie.title} - ${movie.score / 10}`;
})

const newMovies2 = movies.map(movie =>(
    `${movie.title} - ${movie.score / 10}`
))