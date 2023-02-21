// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// numbers.filter(n=> {
//     return n < 10
// })


const even = numbers.filter(i => i % 2 === 0)

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

const highRank = movies.filter(movie => movie.score > 89)

const badRank = movies.filter(m => m.score < 89)

const goodTitles = highRank.map(t => t.title)

//or
const goodMovies = movies.filter(mov => mov.score > 89).map(mov => mov.title)