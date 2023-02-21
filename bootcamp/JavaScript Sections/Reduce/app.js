const prices = [9.99, 1.50, 19.99,49.99, 30.50];

// let total = 0;
// for (let price of prices){
//     total += price
// }
// console.log(total)

const totalPrice = prices.reduce((total, element)=> total + element)

const minPrice = prices.reduce((min, price) => {
    if(price < min){
        return price;
    }
    return min;
})

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

const best = movies.reduce((bestMovie,currMovie) => {
    if(currMovie.score > bestMovie){
        return currMovie;
    }
    return bestMovie;
})

const evens = [2,4,6,8];

const sumOFevens = evens.reduce((sum, num) => sum + num , 100)